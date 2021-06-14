import React from 'react'
import './Empty.scss'
import { Link } from 'react-router-dom'
const Empty = ({ title }) => {
  return (
    <div className="empty">
      <h2 className="empty__title">
        {title}
      </h2>
      <Link to="/" className="empty__button"> Tiếp tục mua sắm</Link>
    </div>
  )
}

export default Empty
