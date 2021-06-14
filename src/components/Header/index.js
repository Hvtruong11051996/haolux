import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionSearchProduct } from '../../actions/productAction'
import ProductItem from '../ProductItem'
import './Header.scss'
import NavItem from './HeaderNav'
import HeaderTop from './HeaderTop/index'
import image from './../../images/logo.png';
import Loading from './Loading'
const Header = ({ setToggle }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const category = useSelector(state => state.category)
  const cartLength = useSelector(state => state.cart.result)
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const searchRef = useRef()

  const handleSearch = (e) => {
    const { value } = e.target
    if (searchRef.current) {
      clearInterval(searchRef.current)
    }

    setSearch(value)
    searchRef.current = setTimeout(() => {
      setProducts([])
      setLoading(true)
      const action = actionSearchProduct(value)
      dispatch(action)
        .then((res) => {
          setLoading(false)
          const { products } = res.data
          if (products) {
            setProducts(products)
          }
        })
        .catch(err => {
          setLoading(false)
        })
    }, 200)
  }
  return (
    <div className="header">
      <HeaderTop
        user={user}
        setToggle={setToggle}
        cartLength={cartLength}
      />
      <div className="header-mid">
        <div className="container">
          <nav className="nav">
            <Link to="/" className="nav__logo">
              <span>H</span>
              <span>a</span>
              <span>o</span>
              <span>L</span>
              <span>u</span>
              <span>x</span>
            </Link>
            <div className="nav-right">
              <ul className="nav-menu">
                {
                  category.map((category, index) => {
                    return (
                      <NavItem
                        category={category}
                        key={index}
                      />
                    )
                  })
                }
              </ul>
              <div className="nav-search">
                <i className='bx bx-search search'
                  onClick={() => setShowSearch(!showSearch)}
                >
                </i>
                <div
                  className={showSearch ?
                    "modal-search active " :
                    "modal-search "}
                >
                  <div className="search-heading">
                    <h3 className="search-heading__title">
                      Tìm kiếm
                    </h3>
                    <div
                      className="search-heading__close"
                      onClick={() => setShowSearch(!showSearch)}
                    >
                      <span>X</span>
                    </div>
                  </div>
                  <div className="search-content">
                    <input
                      type="text"
                      placeholder="Tìm kiếm sản phẩm"
                      onChange={(e) => handleSearch(e)}
                    />
                    <i className='bx bx-search search-icon' />
                  </div>
                  <div className="container">
                    <div className="search-product">
                      <div className="row">
                        {
                          (search && !products.length && loading) ?
                            <div className="error">
                              <Loading />
                            </div>
                            : null
                        }
                        {
                          (search && !products.length && !loading) ?
                            <h1 className="error">Không có sản phẩm nào</h1>
                            : null
                        }

                        {
                          products.length ? products.map((product, index) => {
                            return (
                              <Link
                                to={`/san-pham/${product.slug}`}
                                className=" col-xl-3 col-lg-4 col-sm-6 product-search"
                                key={index}
                                onClick={() => setShowSearch(!showSearch)}
                              >
                                <ProductItem
                                  product={product}
                                />
                              </Link>
                            )
                          })
                            : null
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div >
  )
}

export default Header
