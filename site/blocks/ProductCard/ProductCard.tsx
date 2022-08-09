import { Link } from '@components/ui'
import { useEffect, useState } from 'react'
// import { Product } from '~/packages/commerce/types'
import Client from 'shopify-buy';

const ProductCard = ({ data, product_handle }: { data: { product: any }, product_handle: string}) => {
  const client = Client.buildClient({
    domain: 'jvn-test.myshopify.com',
    storefrontAccessToken: '45b3c40271fd0101fbcbc09efa3238c0'
  });

  const[product, setProduct] = useState(data?.product || null)

  useEffect(() => {
    if(!product) {
      client.product.fetchByHandle(product_handle).then((res) => {
        console.log(res);
        setProduct(
          {
            id: res.id,
            name: res.title,
            description: res.description,
            descriptionHtml: res.description,
            sku: res.id,
            slug: '',
            path: ``,
            images: [
              {
                  "url": res.images[0].src,
                  "altText": '',
                  "width": 1440,
                  "height": 1440
              }
          ],
            variants: [
              {
                  "id": res.variants[0].id,
                  "name": res.variants[0].title,
                  "sku": 'sku',
                  "price": res.variants[0].price,
                  "listPrice": res.variants[0].price,
                  "requiresShipping": true,
                  "availableForSale": true,
                  "options": [
                      {
                          "__typename": "MultipleChoiceOption",
                          "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDU4NTY1ODU5NzU1Mw==",
                          "displayName": "title",
                          "values": [
                              {
                                  "label": "Default Title"
                              }
                          ]
                      }
                  ]
              }
          ],
            price: {
              "value": 18,
              "currencyCode": "USD"
          },
            options: [],
            vendor: res.vendor
          }
        )

      });
    }
  })
  
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