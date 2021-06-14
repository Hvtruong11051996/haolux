import React from 'react'
import PropTypes from 'prop-types'
import './ProductSale.scss'
import CarouselProvider from '../../../../components/CarouselProvider'
import ProductItem from '../../../../components/ProductItem'
import SkeletonProductItem from '../../../../components/Skeleton/SkeletonProductItem'
ProductSale.propTypes = {
  productList: PropTypes.array
}
ProductSale.defaultProps = {
  productList: []
};
function ProductSale({ productList }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      ,
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  const arr = [12, 13, 14, 15, 16,]
  return (
    <div className="product-sale">
      <div className="container">
        <div className="product-sale__content">
          <div className="product-sale__heading">
            <h1>SẢN PHẨM SALE</h1>
          </div>
          <div className="product-sale__slider">
            <CarouselProvider settings={settings} >
              {
                !productList.length && arr.map((index) => {
                  return (
                    <SkeletonProductItem
                      key={index}
                    />
                  )
                })
              }
            </CarouselProvider>
            <CarouselProvider settings={settings} >
              {
                productList.map((product, index) => {
                  return (
                    <ProductItem
                      product={product}
                      key={index}
                    />
                  )
                })
              }
            </CarouselProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSale
