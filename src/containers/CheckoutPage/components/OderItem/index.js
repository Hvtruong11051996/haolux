import React from 'react'
import ConvertVnd from '../../../../utils/convertVnd'

function OderItem({ product }) {
  return (
    <li className="order-list__item order-list__item--price">
      <span>{product.title}  ×
        <span className="quantity">{product.qty}</span>
        <span className="size">Size : {product.size}</span>
      </span>
      <span>{ConvertVnd((product.price * product.qty))}</span>
    </li>
  )
}

export default OderItem
