import { builder, Builder } from '@builder.io/react'
import { getAsyncProps } from '@builder.io/utils'
import commerce from '@lib/api/commerce'

builder.init('7524adafaf9449f38de808d06bae1afc')

export async function resolveBuilderContent(
  modelName: string,
  targetingAttributes?: any
) {
  let page = await builder
    .get(modelName, {
      userAttributes: targetingAttributes,
      includeRefs: true,
      cachebust: true,
    } as any)
    .toPromise()

  if (page) {
    return await getAsyncProps(page, {
      // Here goes all the component level server side data fetch
      // The naming of the function is the namee of the exported component for builder io
      async ProductCard(props) {
        let product: any = {}
        if (props.product_handle) {
          product = await commerce.getProduct({
            variables: { slug: props.product_handle },
          })
        }
        console.log(product)
        return {
          // resolve the query as `products` for ssr
          // used for example in ProductGrid.tsx as initialProducts
          data: product,
        }
      },
    })
  }
  return null
}
