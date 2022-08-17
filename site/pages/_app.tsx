import '@assets/main.css'
import '@assets/chrome-bug.css'
import 'keen-slider/keen-slider.min.css'

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'
import dynamic from 'next/dynamic'

import { builder, Builder } from '@builder.io/react'


const LazyProductCard = dynamic(async () => {
  return (await import('../blocks/ProductCard/ProductCard'))
})
const LazyHero = dynamic(async () => {
  return (await import('../blocks/common/Hero/Hero'))
})
const LazyImageWithTextCta = dynamic(async () => {
  return (await import('../blocks/common/ImageWithTextCta/ImageWithTextCta'))
})

const LazyImageWithTextCtaColumn = dynamic(async () => {
  return (await import('../blocks/common/ImageWithTextCtaColumn/ImageWithTextCtaColumn'))
})
builder.init('7524adafaf9449f38de808d06bae1afc')

Builder.registerComponent(LazyProductCard, {
  name: 'ProductCard',
  image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/play-list-add.svg',
  description: 'Pick products free form',
  inputs: [
    {
      name: "product_handle",
      type: "string"
    },
  ],
})

Builder.registerComponent(LazyHero, {
  name: 'Hero',
  image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/play-list-add.svg',
  description: 'Pick products free form',
  inputs: [
    {
      name: "headline",
      type: "string"
    },
    {
      name: "subline",
      type: "string"
    },
    {
      name: "superiorLine",
      type: "string"
    },
    {
      name: "mainText",
      type: "string"
    },
    {
      name: "normalValue",
      type: "string"
    },
    {
      name: "discountedValue",
      type: "string"
    },
    {
      name: "buttonText",
      type: "string"
    },
    {
      name: 'image',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      required: true,
      defaultValue:
     'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
    },
  ],
})

Builder.registerComponent(LazyImageWithTextCta, {
  name: 'Image With Text CTA',
  image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/play-list-add.svg',
  description: 'Pick products free form',
  inputs: [
    {
        name: "header",
        type: "string"
    },
    {
        name: "blocks",
        type: "list",
        subFields: [
            {
                name: "imageLink",
                type: "string"
              },
              {
                name: "headerLink",
                type: "string"
              },
              {
                name: "header",
                type: "string"
              },
              {
                name: "mainText",
                type: "string"
              },
              {
                name: "ctaText",
                type: "string"
              },
              {
                name: "ctaLink",
                type: "string"
              },
              {
                name: 'image',
                type: 'file',
                allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                required: true,
                defaultValue:
               'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
              },
        ]
    }
  ],
})

Builder.registerComponent(LazyImageWithTextCtaColumn, {
  name: 'Image With Text CTA Column',
  image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/play-list-add.svg',
  description: 'Pick products free form',
  inputs: [
    {
        name: "header",
        type: "string"
    },
    {
        name: "blocks",
        type: "list",
        subFields: [
            {
                name: "url",
                type: "string"
              },
              {
                name: "step",
                type: "string"
              },
              {
                name: "text",
                type: "string"
              },
              {
                name: "ctaText",
                type: "string"
              },
              {
                name: 'reverse',
                type: 'boolean'
              },
              {
                name: 'image',
                type: 'file',
                allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                required: true,
                defaultValue:
               'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
              },
        ]
    }
  ],
})

// Use this to create a menu in Builder IO
Builder.register('insertMenu', {
  name: 'Shopify Products Components',
  items: [
    { name: 'ProductCard' },
  ],
})

Builder.register('insertMenu', {
  name: 'Brand Commons',
  items: [
    { name: 'Hero' },
    { name: 'Image With Text CTA'},
    { name: 'Image With Text CTA Column'},
  ],
})

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <ManagedUIContext>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ManagedUIContext>
    </>
  )
}
