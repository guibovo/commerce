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
builder.init('7524adafaf9449f38de808d06bae1afc')

import '../blocks/ProductCard/ProductCard.builder'
// import '../blocks/CollectionView/CollectionView.builder'
// import '../blocks/ProductView/ProductView.builder'
// import '../blocks/CloudinaryImage/CloudinaryImage.builder'



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

// Use this to create a menu in Builder IO
Builder.register('insertMenu', {
  name: 'Shopify Products Components',
  items: [
    { name: 'ProductCard' },
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
