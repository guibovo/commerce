import dynamic from 'next/dynamic'
import { Builder } from '@builder.io/react'
const LazyImageWithTextCta = dynamic(async () => {
  return (await import('./ImageWithTextCta'))
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