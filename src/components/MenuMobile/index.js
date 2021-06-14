import React from 'react'
import './MenuMobile.scss'
import { Link, NavLink } from 'react-router-dom'
import SubMenu from './SubMenu'
import { useDispatch, useSelector } from 'react-redux'
import { actionSignOut } from '../../actions/userAction'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MenuMobile({ toggle, setToggle }) {
  const user = useSelector((state) => state.user)
  const category = useSelector((state) => state.category)
  const cart = useSelector(state => state.cart.result)
  const dispatch = useDispatch()
  const logout = () => {
    const action = actionSignOut()
    setToggle()
    dispatch(action)
      .then(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('refresh-token')
        localStorage.removeItem('userInfo')
        localStorage.removeItem('result')
        toast.success("Đăng xuất thành công", {
          position: toast.POSITION.TOP_RIGHT
        })
      })
      .catch((err) => {
        toast.error("Đăng xuất thất bại", {
          position: toast.POSITION.TOP_RIGHT
        })
      })
  }
  return (
    <div className="menu-mobile">
      <div
        className={toggle ?
          "menu-mobile__content active" :
          "menu-mobile__content"
        }>
        {
          !user.name && <div className="mobile-heading">
            <Link to="/dang-nhap" onClick={() => setToggle()}>Đăng nhập</Link>
            <Link to="/dang-ky" onClick={() => setToggle()}>Đăng ký</Link>
          </div>
        }
        {
          user.name &&
          <div className="mobile-user">
            <div className="user-info">
              <img src="./images/user1.png" alt="" />
              <div className="user-info__text">
                <h3>{user.name}</h3>
                <span>{user.email}</span>
              </div>
            </div>
            <ul className="user-list">
              <NavLink
                to="/gio-hang"
                className="user-list__item"
                onClick={() => setToggle()}
                activeClassName="selected"
              >
                <span>Giỏ hàng</span>
                <span>({cart ? cart : 0})</span>
              </NavLink>
              <NavLink
                to="/lich-su-don-hang"
                className="user-list__item"
                activeClassName="selected"
                onClick={() => setToggle()}
              >
                <span>Lịch sửu đơn hàng</span>
              </NavLink>
              <NavLink
                to="/sua-thong-tin"
                className="user-list__item"
                onClick={() => setToggle()
                }
                activeClassName="selected"
              >
                <span>Sửa thông tin</span>
              </NavLink>
              <Link
                to="/" className="user-list__item"
                onClick={() => setToggle()}
              >
                <span onClick={() => logout()}>Đăng xuất</span>
              </Link>
            </ul>
          </div>
        }
        <ul className="mobile-list">
          {
            category.map((category, index) => {
              return (
                <SubMenu
                  category={category}
                  key={index}
                  setToggle={setToggle}
                />
              )
            })
          }


        </ul>
      </div>
      <div
        className={toggle ?
          "menu-mobile__overlay active" :
          "menu-mobile__overlay"
        }
        onClick={() => setToggle()}
      >
      </div>
    </div>
  )
}

export default MenuMobile
