import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './ProductItem.scss'
import convertVnd from '../../utils/convertVnd'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import scrollToTop from '../../utils/scrollToTop'
ProductItem.propTypes = {
  product: PropTypes.object
}
ProductItem.defaultProps = {
  product: {}
};
function ProductItem({ product }) {
  return (

    // <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
    <div className="product-item">
      <div className="product-item__img">
        <LazyLoadImage
          src={product.productImage[0].img}
          alt=""
        />
        <LazyLoadImage
          src={product.productImage[1].img}
          alt=""
        />
        {
          product.sale ?
            <div className="sale">
              GIẢM {product.sale}%
        </div>
            : null
        }
        <ul className="product-button">
          <li className="product-button__item">
            <i className='bx bx-cart'></i>
          </li>
          <Link
            to={`/san-pham/${product.slug}`}
            className="product-button__item"
            onClick={() => scrollToTop()}
          >
            <i className='bx bx-search-alt-2' ></i>
          </Link>
          <li className="product-button__item">
            <i className='bx bx-refresh' ></i>
          </li>
          <li className="product-button__item">
            <i className='bx bx-heart' ></i>
          </li>
        </ul>
      </div>
      <Link
        to={`/san-pham/${product.slug}`}
        className="product-item__title"
        onClick={() => scrollToTop()}
      >
        {product.title}
      </Link>
      <div className="product-item__rating">
        <i className="star-gold fas fa-star"></i>
        <i className="star-gold fas fa-star"></i>
        <i className="star-gold fas fa-star"></i>
        <i className=" star-gold fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
      <p className="product-item__price">
        {convertVnd(product.price)}
      </p>
      <ul className="product-item__button">
        <li className="button__item"
        >
          <i className='bx bx-cart'></i>
        </li>
        <li className="button__item">
          <i className='bx bx-refresh' ></i>
        </li>
        <li className="button__item">
          <i className='bx bx-heart' ></i>
        </li>
      </ul>
    </div>
    // </div>
  )
}

export default ProductItem
