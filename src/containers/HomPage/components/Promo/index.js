import React from 'react'
import './Promo.scss'
import { Link } from 'react-router-dom'
import promo from './../../../../images/promo.jpg'
import promo2 from './../../../../images/promo2.jpg'
import promoText1 from './../../../../images/promo-text-1.png'
import promoText2 from './../../../../images/promo-text-2.png'


const Promo = () => {

  return (
    <div className="promo">
      <Link to="/" className="promo-item">
        <img src={promo} alt="" className="promo-item__img promo-item__img--bg" />
        <img src={promoText1} alt="" className="promo-item__img promo-item__img--text" />
      </Link>
      <Link to="/" className="promo-item">
        <img src={promo2} alt="" className="promo-item__img promo-item__img--bg" />
        <img src={promoText2} alt="" className="promo-item__img promo-item__img--text" />
      </Link>
    </div>
  )
}

export default Promo
