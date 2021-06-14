import React from 'react'
import PropTypes from 'prop-types'
import './ProductNew.scss'
import ProductItem from '../../../../components/ProductItem'
import SkeletonProductItem from '../../../../components/Skeleton/SkeletonProductItem'
import { limitProductNew } from '../../../../constants'
ProductNew.propTypes = {
  productList: PropTypes.array
}
ProductNew.defaultProps = {
  productList: []
};

function ProductNew({ productList }) {
  const arr = []
  for (let i = 0; i < limitProductNew; i++) {
    arr.push(Math.random())
  }

  return (
    <div className="product-new">
      <div className="container">
        <div className="product-new__heading">
          <h3>SẢN PHẨM MỚI NHẤT</h3>
        </div>
        <div className="row">
          {
            !productList.length && arr.map((product, index) => {
              return (
                <div
                  className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
                  key={index}
                >
                  <SkeletonProductItem />
                </div>
              )
            })
          }
          {productList.map((product, index) => {
            return (
              <div
                className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
                key={index}
              >
                <ProductItem
                  product={product}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductNew
