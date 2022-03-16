import React from 'react'
import products from '../mockdata/products'
import ProductItem from './ProductItem'

const ProductList = () => {
  return (
    <div className='popular-item children-centered wrap'>
        {
            products.map((product)=>{
                return <ProductItem product={product}/>
            })
        }
    </div>
  )
}

export default ProductList