import React from 'react'
import { Link } from 'react-router-dom'
import './Breadcrumb.scss'
function Breadcrumb({ pathname }) {
  return (
    <div className="breadcrumb">
      <ul className="breadcrumb-list">
        {
          pathname.map((path) => {
            return <li className="breadcrumb-item">
              {
                path === '' ? <Link to="/" className="breadcrumb-item__link">
                  Trang chu
                 </Link>
                  :
                  <Link to={`/${path.replace(/ /g, '-')}`} className="breadcrumb-item__link">
                    {
                      path.replace(/-/g, ' ')
                    }
                  </Link>
              }
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default React.memo(Breadcrumb)
