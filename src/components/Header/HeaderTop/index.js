import React from 'react'
import './Top.scss'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionSignOut } from '../../../actions/userAction'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Top = ({ setToggle, user, cartLength }) => {
  const token = JSON.parse(localStorage.getItem('token'))
  const dispatch = useDispatch()
  const logout = () => {
    const action = actionSignOut()
    dispatch(action)
      .then(() => {
        localStorage.removeItem('userInfo')
        localStorage.removeItem('result')
        toast.success("Đăng xuất thành công", {
          position: toast.POSITION.TOP_RIGHT
        })
      })
      .catch((err) => {
        toast.error(err, {
          position: toast.POSITION.TOP_RIGHT
        })
      })
  }
  return (
    <div className="header-top">
      <div className="container">
        <div className="top">
          <div className="top-left">
            <div className="top-left__button" onClick={() => setToggle(true)}>
              <i className='bx bx-menu' ></i>
            </div>
            <div className="top-left__phone">
              <i className='bx bx-phone'></i>
              <span>+189 284 5679</span>
            </div>
          </div>
          <ul className="top-right">
            {
              !user.token &&
              <li className="top-item">
                <i className='bx bx-user'></i>
                <Link to="/dang-nhap">Đăng nhập</Link>
                <span> / </span>
                <Link to="/dang-ky">Đăng ký</Link>
              </li>
            }
            {
              user.token &&
              <li className="top-item">
                <i class='bx bx-border-all'></i>
                <Link to="/lich-su-don-hang">Đơn hàng</Link>
              </li>
            }
            {
              user.token &&
              <li className="top-item">
                <i className='bx bx-user'></i>
                <Link to="/login">{user.name}</Link>
                <span> / </span>
                <span onClick={() => logout()}>Đăng xuất</span>
              </li>
            }

            <Link to="/gio-hang" className="top-item top-item--cart">
              <i className='bx bx-cart' ></i>
              <p> {cartLength ? cartLength : 0} sản phẩm </p>
            </Link>
          </ul>
        </div>
      </div>
    </div >
  )
}

export default Top
