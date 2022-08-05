import dynamic from 'next/dynamic'
import { Builder } from '@builder.io/react'
const LazyProductCard = dynamic(async () => {
  return (await import('./ProductCard')).ProductCard
})

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