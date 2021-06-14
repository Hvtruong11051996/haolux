import React from 'react'
import './Service.scss'
import ServiceImage from './../../../../images/service1.jpg'
import ServiceImage2 from './../../../../images/service2.jpg'
import ServiceImage3 from './../../../../images/service3.jpg'
const Service = () => {
  return (
    <div className="service">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="service__item">
              <img src={ServiceImage} alt="" />
              <div className="service__overlay">

              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="service__item">
              <img src={ServiceImage2} alt="" />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="service__item">
              <img src={ServiceImage3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
