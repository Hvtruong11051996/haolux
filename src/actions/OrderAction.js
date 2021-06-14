import orderApi from "../api/orderApi"
import { GET_ORDERS_FAIL, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS } from "../constants/orderConstants"



export const actionPostOrder = (order) => {
  return async (dispatch) => {
    try {
      const res = await orderApi.postOrder(order)
      return res
    }
    catch (err) {
      return err
    }
  }
}

export const actionGetOrders = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ORDERS_REQUEST })
    try {
      const res = await orderApi.getOrders()
      dispatch({ type: GET_ORDERS_SUCCESS, payload: res.data.orders })
      return res
    }
    catch (err) {
      dispatch({ type: GET_ORDERS_FAIL })
      return err
    }
  }
}

export const actionRemoveOrder = (id) => {
  return async (dispatch) => {
    try {
      const res = await orderApi.removeOrder(id)
      return res
    }
    catch (err) {

    }
  }
}