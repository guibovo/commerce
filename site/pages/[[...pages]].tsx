import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import commerce from '@lib/api/commerce'
import { Text } from '@components/ui'
import { Layout } from '@components/common'
import getSlug from '@lib/get-slug'
import { missingLocaleInPages } from '@lib/usage-warns'
import type { Page } from '@commerce/types/page'
import { useRouter } from 'next/router'
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react'
import Head from 'next/head'
import DefaultErrorPage from 'next/error'

builder.init(process.env.BUILDER_IO_PUBLIC_API!)

export async function getStaticProps({
  preview,
  params,
  locale,
  locales,
}: GetStaticPropsContext<{ pages: string[] }>) {
  // ECOMMERCE PAGES
  const config = { locale, locales }
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { pages } = await pagesPromise
  const { categories } = await siteInfoPromise
  console.log('-------------')
  console.log(params)
  console.log('-------------')
  const path = params?.pages ? params?.pages.join('/') : '/'
  const slug = locale ? `${locale}/${path}` : path
  const pageItem = pages.find((p: Page) =>
    p.url ? getSlug(p.url) === slug : false
  )

  const data =
    pageItem &&
    (await commerce.getPage({
      variables: { id: pageItem.id! },
      config,
      preview,
    }))
  // ECOMMERCE PAGES

  let page = data?.page

  if (!data?.page) {
    // BUILDER IO PAGES
    // Fetch the builder content
    page = await builder
      .get('page', {
        userAttributes: {
          urlPath: '/' + (params?.pages?.join('/') || ''),
        },
      })
      .toPromise()
  }

  if (!page) {
    return {
      notFound: true,
    }
  }

  return {
    props: { pages, page, categories },
    revalidate: 60 * 60, // Every hour
  }
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const config = { locales }
  const { pages }: { pages: Page[] } = await commerce.getAllPages({ config })
  const [invalidPaths, log] = missingLocaleInPages()
  const ecommercePaths = pages
    .map((page) => page.url)
    .filter((url) => {
      if (!url || !locales) return url
      // If there are locales, only include the pages that include one of the available locales
      if (locales.includes(getSlug(url).split('/')[0])) return url

      invalidPaths.push(url)
    })
  log()

  const builderPages = await builder.getAll('page', {
    // We only need the URL field
    fields: 'data.url',
    options: { noTargeting: true },
  })
  const builderPaths = builderPages.map((page) => `${page.data?.url}`)

  console.log([...ecommercePaths, ...builderPaths])
  return {
    paths: [...ecommercePaths, ...builderPaths],
    fallback: 'blocking',
  }
}

export default function Pages({ page }) {
  const router = useRouter()
  const isPreviewing = useIsPreviewing()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{page?.data.title}</title>
      </Head>
      {/* Render the Builder page */}
      <BuilderComponent model="page" content={page} />
    </>
  )
}

Pages.Layout = Layout
