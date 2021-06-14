import React, { useState } from 'react'
import './Login.scss'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
//  Validate
import { FastField, Formik, Form } from 'formik';
import * as yup from 'yup';
// Action
import { actionLogin } from '../../actions/userAction';
// Toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputField from '../../helpers/custom-field/InputField';
import LoadingButton from '../../components/LoadingButton';
import { actionGetCart } from '../../actions/cartAction';

import emailImage from './../../images/email.png'
import passwordImage from './../../images/password.png'
const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()
  const initialValues = {
    email: '',
    password: ''
  }
  const validationSchema = yup.object().shape({
    email: yup.string()
      .required('Vui lòng nhập email')
      .email('Email không hợp lệ'),
    password: yup.string()
      .required('Vui lòng nhập password')
      .min(6, "Mật khẩu phải chứa ít nhất 6 kí tự")
      .max(24, 'Mật khẩu tối thiếu 24 kí tự')
  })
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const action = actionLogin(values)
        setLoading(true)
        dispatch(action)
          .then(() => {
            toast.success("Đăng nhập thành công", {
              position: toast.POSITION.TOP_RIGHT
            })
            const actionGet = actionGetCart()
            dispatch(actionGet)
            setLoading(false)
            history.push('/')
          })
          .catch((err) => {
            toast.error(err, {
              position: toast.POSITION.TOP_RIGHT
            })
            setLoading(false)
          })
      }}
    >
      {formikProps => {
        return (
          <div className="login">
            <Form className="login-form" >
              <FastField
                type='email'
                component={InputField}
                placeholder="Email"
                name='email'
                src={emailImage}
              />
              <FastField
                type='password'
                component={InputField}
                placeholder="Password"
                name='password'
                src={passwordImage}
              />
              <div className="login-form__group login-form__group--button">
                {
                  loading ? <LoadingButton /> : <button type="submit" >Đăng nhập</button>
                }
              </div>
              <div className="login-form__recommend">
                <span>Bạn chưa có tài khoản ? <Link to="/dang-ky">Đăng ký</Link></span>
              </div>
            </Form>
          </div>
        )
      }}
    </Formik>
  )


}

export default LoginPage








