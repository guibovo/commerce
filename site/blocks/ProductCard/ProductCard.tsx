import { Link } from '@components/ui'
import { useEffect, useState } from 'react'
// import { Product } from '~/packages/commerce/types'
import Client from 'shopify-buy';
import useProduct from '@lib/hooks/useProduct';

const ProductCard = ({ data, product_handle }: { data: { product: any }, product_handle: string}) => {
  const[product, setProduct] = useState(data?.product || null)
  const productResult = useProduct(product_handle)

  if(!product) {
    if(productResult.data) setProduct(productResult.data)
  }
  
  return product 
    ? <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', alignContent: 'center', justifyContent: 'center' }}>
        <Link href={`/product${product.path}`}>
          <img src={product.images[0].url} />
          <p style={{ textAlign: 'center' }}>{product.name}</p>
          <p style={{ textAlign: 'center' }}>{product.price.value} {product.price.currencyCode}</p>
          
        </Link> 
      </div>
    : <>Oops!</>
}

export default ProductCard;