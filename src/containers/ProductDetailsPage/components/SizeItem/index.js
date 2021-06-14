import React from 'react'
import PropTypes from 'prop-types'
const SizeItem = ({ index, indexSize, productSize, setIndexSize }) => {
  return (
    <li
      onClick={() => setIndexSize(index)}
      className={
        indexSize === index ?
          "product-size__item product-size__item--active"
          :
          "product-size__item"
      }>
      {productSize.size}
    </li>
  )
}
SizeItem.propTypes = {
  index: PropTypes.number,
  indexSize: PropTypes.number,
  productSize: PropTypes.object,
  setIndexSize: PropTypes.func
}
export default SizeItem
