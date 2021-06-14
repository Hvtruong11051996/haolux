import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MenuMobile from '../components/MenuMobile'
import { ToastContainer } from 'react-toastify';
import userApi from '../api/userApi';
import { actionGetAllCategory } from '../actions/categoryAction';
import { useDispatch } from 'react-redux';
import { actionGetAllProduct } from '../actions/productAction';
import { actionGetCart } from '../actions/cartAction';
const LayoutRouter = ({ children }) => {

  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(false)
  async function refresh(data) {
    const res = await userApi.refreshToken(data)
    const { token, refreshToken } = res.data
    localStorage.setItem('token', JSON.stringify(token))
    localStorage.setItem('refresh-token', JSON.stringify(refreshToken))
  }
  // useEffect(() => {
  //   const refreshToken = JSON.parse(localStorage.getItem('refresh-token'))
  //   if (refreshToken) {
  //     setTimeout(() => {
  //       refresh(refreshToken)
  //     }, 60 * 59 * 1000)
  //   }
  // }, [])
  //  GET CATEGORY
  useEffect(() => {
    const action = actionGetAllCategory()
    dispatch(action)
  }, [dispatch])
  // GET PRODUCTS
  useEffect(() => {
    const action = actionGetAllProduct()
    dispatch(action)
  }, [dispatch])
  //  GET CART
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'))
    const result = JSON.parse(localStorage.getItem('result'))
    if ((user && user.token) && result !== 0 && result !== null) {
      const action = actionGetCart()
      dispatch(action)
    }
  }, [])
  // GET ORDERS

  return (
    <>
      <Header
        setToggle={setToggle}
      />
      <MenuMobile
        toggle={toggle}
        setToggle={setToggle}
      />
      <ToastContainer />
      {children}
      <Footer />
    </>
  )
}

export default LayoutRouter
