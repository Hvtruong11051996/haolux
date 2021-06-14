import React, { useState } from 'react'
import './Register.scss'
import { Link, useHistory } from 'react-router-dom'
import { FastField, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { actionSignup } from '../../actions/userAction';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputField from '../../helpers/custom-field/InputField';
import LoadingButton from '../../components/LoadingButton';
import { actionGetCart } from '../../actions/cartAction';

import userImage from './../../images/user.svg'
import emailImage from './../../images/email.png'
import passwordImage from './../../images/password.png'
const RegisterPage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const validationSchema = yup.object().shape({
    firstName: yup.string()
      .required('Vui lòng nhập họ '),
    lastName: yup.string()
      .required('Vui lòng nhập tên '),
    email: yup.string()
      .required('Vui lòng nhập email')
      .email('Email không hợp lệ'),
    password: yup.string()
      .required('Vui lòng nhập mật khẩu')
      .min(8, "Mật khẩu phải chứa ít nhất 8 kí tự")
      .max(24, 'Mật khẩu tối thiếu 24 kí tự'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Mật khảu không trùng khơp')
  })

  return (
    < Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        const action = actionSignup(values)
        setLoading(true)
        dispatch(action)
          .then(() => {
            const action = actionGetCart()
            setLoading(false)
            history.push('/')
            toast.success("Đăng ký thành công", {
              position: toast.POSITION.TOP_RIGHT
            })
            dispatch(action)
          })
          .catch((err) => {
            setLoading(false)
            toast.error(err, {
              position: toast.POSITION.TOP_RIGHT
            })
          })
      }}
    >
      {formikProps => {
        return (
          <div className="login">
            <Form className="login-form">
              <FastField
                type='text'
                component={InputField}
                name="firstName"
                placeholder="First Name"
                src={userImage}
              />
              <FastField
                type='text'
                component={InputField}
                name="lastName"
                placeholder="Last Name"
                src={userImage}
              />
              <FastField
                type='email'
                component={InputField}
                name="email"
                placeholder="Email"
                src={emailImage}
              />
              <FastField
                type='password'
                component={InputField}
                name="password"
                placeholder="Password"
                src={passwordImage}
              />
              <FastField
                type='password'
                component={InputField}
                name="confirmPassword"
                placeholder="Confirm Password"
                src={passwordImage}
              />
              <div className="login-form__group login-form__group--button">
                {
                  loading ? <LoadingButton /> : <button type="submit">Đăng ký</button>
                }

              </div>
              <div className="login-form__recommend">
                <span>Bạn đã có tài khoản ? <Link to="/dang-nhap">Đăng nhập</Link></span>
              </div>
            </Form>
          </div>
        )
      }}
    </Formik >
  )

}

export default RegisterPage
