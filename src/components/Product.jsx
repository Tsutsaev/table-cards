import React from 'react'
import style from './Product.module.css'

const Product = (product) => {
  return (
    
    <tr className={style.product} >
     <td>  <img src={product.image} alt="" /></td>
       <td>
       {product.price}
       </td>
        <td>{product.name}</td>
        <td>{product.id}</td>
        </tr>
  )
}

export default Product