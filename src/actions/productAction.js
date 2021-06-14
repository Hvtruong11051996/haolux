import productApi from "../api/productApi"
import {
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
  GET_PRODUCT_SLUG_REQUEST,
  GET_PRODUCT_SLUG_FAIL,
  GET_PRODUCT_SLUG_SUCCESS
} from
  "../constants/productConstants"



export const actionGetAllProduct = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_PRODUCT_REQUEST })
    try {
      const res = await productApi.getAllProduct()
      dispatch({ type: GET_ALL_PRODUCT_SUCCESS, payload: res.data })
      return res
    }
    catch (err) {
      dispatch({ type: GET_ALL_PRODUCT_FAIL })
      return Promise.reject(err.response.data.message)
    }
  }
}

export const actionGetProductSlug = (slug) => {
  return async (dispatch) => {
    dispatch({ type: GET_PRODUCT_SLUG_REQUEST })
    try {
      const res = await productApi.getProductSlug(slug)
      dispatch({ type: GET_PRODUCT_SLUG_SUCCESS })
      return res
    }
    catch (error) {
      dispatch({ type: GET_PRODUCT_SLUG_FAIL })
      return Promise.reject(error.response.data.message)
    }
  }
}



export const actionSearchProduct = (search) => {
  return async (dispatch) => {
    try {
      const res = await productApi.searchProduct(search)
      return res
    }
    catch (err) {
      return Promise.reject(err.response.data.message)
    }
  }
}