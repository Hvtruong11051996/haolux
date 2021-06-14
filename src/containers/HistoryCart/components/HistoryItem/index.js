import React, { useState } from 'react'
import './HistoryItem.scss'
import { Link } from 'react-router-dom'
import ConvertVnd from '../../../../utils/convertVnd';

function HistoryItem({ product }) {
  return (
    <div className="history-item">
      <div className="row">
        <div className="col-xl-2 col-lg-2  col-md-2 col-sm-8 ">
          <div className="history-item__img">
            <img src={product.productId.productImage[0].img} alt="" />
          </div>
        </div>
        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <Link to="/" className="history-item__name">
                {product.productId.title}
              </Link>
              <p className="history-item__size">
                quantity : <span>{product.purchaseQty}</span>
              </p>

              <div className="history-item__price">
                <span>{ConvertVnd(product.productId.price)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryItem
