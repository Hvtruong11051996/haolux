import React from 'react'
import PropTypes from 'prop-types'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
CarouselProvider.propTypes = {
  settings: PropTypes.object
}
CarouselProvider.defaultProps = {
  settings: {}
};
function CarouselProvider({ children, settings }) {

  return (
    <>
      <Slider {...settings}>
        {children}
      </Slider>
    </>
  )
}

export default CarouselProvider
