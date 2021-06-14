import React from 'react'
import './Banner.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image2 from './../../images/new2.png';
import image4 from './../../images/new4.png';
import image5 from './../../images/new5.png';
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true
  };
  return (
    <div className="banner">
      <Slider {...settings}>
        <div className="banner-item ">
          <div className="container">
            <div className="banner__content">
              <div className="banner-left">
                <p className="banner-left__head">
                  Cảm hứng mới 2020
                </p>
                <h1 className="banner-left__title">
                  GIÀY THỂ THAO CHO BẠN
                </h1>
                <p className="banner-left__desc">
                  Xu hướng từ bộ sưu tập phong cách giày
                </p>
                <div className="banner-left__button">
                  <button>Cửa hàng</button>
                </div>
              </div>
              <div className="banner-right">
                <div className="banner-right__bg">
                  <img src={image2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-item ">
          <div className="container">
            <div className="banner__content">
              <div className="banner-left">
                <p className="banner-left__head">
                  Cảm hứng mới 2020
                </p>
                <h1 className="banner-left__title">
                  GIÀY THỂ THAO ĐI CHƠI
                </h1>
                <p className="banner-left__desc">

                  Xu hướng từ bộ sưu tập phong cách giày
                </p>
                <div className="banner-left__button">
                  <button>Cửa hàng</button>
                </div>
              </div>
              <div className="banner-right">
                <div className="banner-right__bg">
                  <img src={image4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-item ">
          <div className="container">
            <div className="banner__content">
              <div className="banner-left">
                <p className="banner-left__head">
                  Cảm hứng mới 2020
                </p>
                <h1 className="banner-left__title">

                  GIÀY THỂ THAO NGOÀI TRỜI
                </h1>
                <p className="banner-left__desc">
                  Xu hướng từ bộ sưu tập phong cách giày
                </p>
                <div className="banner-left__button">
                  <button>Cửa hàng</button>
                </div>
              </div>
              <div className="banner-right">
                <div className="banner-right__bg">
                  <img src={image5} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Banner
