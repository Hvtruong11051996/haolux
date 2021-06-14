import cartApi from "../api/cartApi"
import {
  ADD_TO_CART_FAIL, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, UPDATE_CART_FAIL, UPDATE_CART_REQUEST, UPDATE_CART_SUCCESS, GET_CART_REQUEST,
  GET_CART_SUCCESS, GET_CART_FAIL, DELETE_CART_REQUEST, DELETE_CART_FAIL, DELETE_CART_SUCCESS
} from "../constants/cartConstants"
export const actionAddToCart = (cartItem) => {
  return async (dispatch) => {
    dispatch({ type: ADD_TO_CART_REQUEST })
    try {
      const res = await cartApi.addToCart(cartItem)
      dispatch({ type: ADD_TO_CART_SUCCESS, payload: res.data })
      return res
    }
    catch (err) {
      dispatch({ type: ADD_TO_CART_FAIL })
      return Promise.reject(err.response.data.message)
    }
  }
}

export const actionUpdateCart = (quantity, size, id) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_CART_REQUEST })
    try {
      const res = await cartApi.updateCart(quantity, size, id)
      dispatch({ type: UPDATE_CART_SUCCESS, payload: res.data })
      return res
    }
    catch (err) {
      dispatch({ type: UPDATE_CART_FAIL })
      return Promise.reject(err.response.data.message)
    }
  }
}

export const actionRemoveCart = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_CART_REQUEST })
    try {
      const res = await cartApi.removeCartItem(id)
      dispatch({ type: DELETE_CART_SUCCESS, payload: res.data })
      return res
    }
    catch (err) {
      dispatch({ type: DELETE_CART_FAIL })
      // return Promise.reject(err.response.data.message)
    }
  }
}

export const actionGetCart = () => {
  return async (dispatch) => {
    dispatch({ type: GET_CART_REQUEST })
    try {
      const res = await cartApi.getCart()
      dispatch({ type: GET_CART_SUCCESS, payload: res.data })
      return res
    }
    catch (err) {
      dispatch({ type: GET_CART_FAIL })
      return Promise.reject(err.response.data.message)
    }
  }
}
