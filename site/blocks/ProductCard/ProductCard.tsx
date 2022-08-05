import { Link } from '@components/ui'

const ProductCard = ({ data }) => {
  const product = data?.product
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