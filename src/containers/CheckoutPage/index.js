import React, { useState } from 'react'
import './CheckoutPage.scss'
import { FastField, Form, Formik, Field } from 'formik';
import * as yup from 'yup';
import InputField from '../../helpers/custom-field/InputField';
import { useDispatch, useSelector } from 'react-redux';
import OderItem from './components/OderItem';
import ConvertVnd from '../../utils/convertVnd';
import SelectField from '../../helpers/custom-field/SelectField';
import { useHistory } from 'react-router-dom';
import { actionPostOrder } from '../../actions/OrderAction';
import dataCity from '../../data.json'

// Toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { actionGetCart } from '../../actions/cartAction';
import LoadingButton from '../../components/LoadingButton';
function CheckoutPage() {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const user = JSON.parse(localStorage.getItem('userInfo'))
  const history = useHistory()
  const [city, setCity] = useState(dataCity)
  const [district, setDistrict] = useState([])
  const [commune, setCommune] = useState([])
  const [loading, setLoading] = useState(false)
  const initialValues = {
    name: '',
    phone: '',
    city: 'Tiền Giang',
    district: '',
    address: '',
    commune: ''
  }
  const validationSchema = yup.object().shape({
    name: yup.string()
      .required('Vui lòng nhập họ và tên '),
    phone: yup.number()
      .required('Vui lòng nhập số điện thoại '),
    city: yup.string()
      .required('Vui lòng nhập thành phố'),
    district: yup.string()
      .required('Vui lòng nhập huyện'),
    commune: yup.string()
      .required('Vui lòng nhập xã'),
    address: yup.string()
      .required('Vui lòng nhập địa chỉ')
  })
  const onChangeFiled = (e) => {
    const { name, value } = e.target
    if (name === 'city') {
      const result = city.find((city) => {
        return city.name === value
      })
      if (result) {
        setDistrict(result.huyen)
      }
    }
    if (name === 'district') {
      const result = district.find((district) => {
        return district.name === value
      })
      if (result) {
        setCommune(result.xa)
      }
    }
  }
  if (!user || (user && !user.token)) {
    history.push('/dang-nhap')
    return null
  }
  if (!cart.cartItems.length) {
    return <div className="padding"></div>
  }
  return (
    <div className="checkout">
      <div className="container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            const { name, phone, city, district, address } = values
            const newCart = cart.cartItems.map((item) => {
              return {
                productId: item.prod_id,
                payablePrice: item.price,
                purchaseQty: item.qty
              }
            })
            const order = {
              cardId: cart.id,
              cart: newCart,
              name,
              phone,
              city,
              town: district,
              address,
              fee: 30000,
              totalAmount: cart.totalPrice
            }
            const action = actionPostOrder(order)
            setLoading(true)
            dispatch(action)
              .then(() => {
                setLoading(false)
                history.push('/lich-su-don-hang')
                const action = actionGetCart()
                dispatch(action)
                toast.success("Bạn đã đặt hàng thành công", {
                  position: toast.POSITION.TOP_RIGHT
                })
              })
              .catch(() => {
                setLoading(false)
              })
          }}

        >
          {
            formikProps => {
              return (
                <div className="checkout__content">
                  <div className="row">
                    <div className="col-xl-6">
                      <Form className="checkout-form">
                        <div className="checkout-form__title">
                          Thanh toán và giao hàng
                        </div>
                        <FastField
                          type='text'
                          component={InputField}
                          name="name"
                          placeholder="Họ và tên"
                        />
                        <FastField
                          type='number'
                          component={InputField}
                          name="phone"
                          placeholder="Số điện thoại"
                        />
                        <Field
                          component={SelectField}
                          name="city"
                          placeholder="Thành phố"
                          options={city}
                          onChangeFiled={onChangeFiled}
                        />
                        <Field
                          component={SelectField}
                          name="district"
                          placeholder=" Quận/Huyện"
                          options={district}
                          onChangeFiled={onChangeFiled}
                        />
                        <Field
                          component={SelectField}
                          name="commune"
                          placeholder=" Xã"
                          options={commune}
                          onChangeFiled={onChangeFiled}
                        />
                        <FastField
                          type='text'
                          component={InputField}
                          name="address"
                          placeholder="Địa chỉ"
                        />
                      </Form>
                    </div>
                    <div className="col-xl-6">
                      <div className="checkout-order">
                        <h2 className="checkout-order__title">
                          Đơn hàng của bạn
                        </h2>
                        <ul className="order-list">
                          <li className="order-list__item">
                            <span>Sản phẩm</span>
                            <span>Tạm tính</span>
                          </li>
                          {cart.cartItems.map((product, index) => {
                            return (
                              <OderItem
                                product={product}
                                key={index}
                              />
                            )
                          })}
                          <li className="order-list__item">
                            <span>Tạm tính</span>
                            <span>{ConvertVnd(cart.totalPrice)}</span>
                          </li>
                          <li className="order-list__item">
                            <span>Giao hàng</span>
                            <span>{ConvertVnd(30000)}</span>
                          </li>
                          <li className="order-list__item">
                            <span>Tổng</span>
                            <span>{ConvertVnd(cart.totalPrice + 30000)}</span>
                          </li>
                        </ul>
                        <div className="checkout-button">
                          {
                            !loading ?
                              <button type="submit"
                                onClick={() => formikProps.handleSubmit()}
                              >
                                Thanh toán khi nhận hàng
                          </button> :
                              <LoadingButton />
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          }
        </Formik >
      </div >
    </div >
  )
}

export default CheckoutPage
