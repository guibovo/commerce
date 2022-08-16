import useSwr from 'swr'
import shopifyFetcher from '@vercel/commerce-shopify/fetcher'
import { normalizeProduct } from '@vercel/commerce-shopify/utils/normalize'
import getProductQuery from '@vercel/commerce-shopify/utils/queries/get-product-query'

import type { Product } from '@vercel/commerce/types/product'

interface ProductVariables {
  slug: string
}

const fetcher = (slug: string) =>
  shopifyFetcher({
    query: getProductQuery,
    variables: {
      slug,
    },
  }).then(({ productByHandle }: any) => normalizeProduct(productByHandle))

const useProduct = (slug: string) =>
  useSwr<Product, ProductVariables>(['product', slug], () => fetcher(slug))

export default useProduct