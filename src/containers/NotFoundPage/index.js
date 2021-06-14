import React from 'react'
import { Link } from 'react-router-dom'
import './NotFoundPage.scss'
import foundImage from './../../images/not-found.png'
const NotFoundPage = () => {
  return (
    <div className="not-found">
      <div className="container">
        <div className="not-found__content">
          <div className="not-found__img">
            <img src={foundImage} alt="" />
          </div>
          <div className="not-found__text">
            <p className="title">
              Rất tiếc !, có vẻ như đã xảy ra sự cố. Trang web này sẽ sớm được cập nhật!</p>
            <p>
              Bạn có thể bấm vào <Link to="https://www.facebook.com/haoham137/">đây</Link>
để gửi cho tôi một báo cáo hoặc <Link to="/">trở về trang chủ</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
