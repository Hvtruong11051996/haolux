import React from 'react'
import './Sale.scss'
import { Link } from 'react-router-dom'
import SaleImage from './../../../../images/sale1.jpg'
import SaleImage2 from './../../../../images/sale2.jpg'
import SaleImage3 from './../../../../images/sale3.jpg'
const Sale = () => {
  return (
    <div className="sale">
      <Link to="/" className="sale-item">
        <img src={SaleImage} alt="" />
        <div className="sale-item__overlay sale-item__overlay--red">

        </div>
      </Link>
      <Link to="/" className="sale-item">
        <img src={SaleImage2} alt="" />
        <div className="sale-item__border">

        </div>
      </Link>
      <Link to="/" className="sale-item">
        <img src={SaleImage3} alt="" />
        <div className="sale-item__overlay sale-item__overlay--black">

        </div>
      </Link>
    </div>
  )
}

export default Sale
