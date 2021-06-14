import React from 'react'
import PropTypes from 'prop-types'
const ImageItem = ({ index, indexImage, setIndexImage, productImage }) => {
  return (
    <li
      className={
        index === indexImage ?
          "product-slider__item product-slider__item--active" :
          "product-slider__item"
      }
      key={index}
      onClick={() => setIndexImage(index)}
    >
      <img src={productImage.img} alt="" />
    </li>
  )
}
ImageItem.propTypes = {
  index: PropTypes.number,
  indexSize: PropTypes.number,
  productSize: PropTypes.object,
  setIndexSize: PropTypes.func
}
export default ImageItem
