import dynamic from 'next/dynamic'
import { Builder } from '@builder.io/react'
const LazyHero = dynamic(async () => {
  return (await import('./Hero'))
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