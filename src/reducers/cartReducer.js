import { ADD_TO_CART_SUCCESS, DELETE_CART_SUCCESS, GET_CART_FAIL, GET_CART_SUCCESS, UPDATE_CART_SUCCESS } from "../constants/cartConstants";

const initialValue = {
  result: localStorage.getItem('result') || null,
  cartItems: [],
  totalPrice: null,
  id: null
}


export const cartReducer = (state = initialValue, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_TO_CART_SUCCESS: {
      const cart = {
        cartItems: payload.cart,
        result: payload.result,
        totalPrice: payload.totalPrice,
        id: payload.id
      }
      localStorage.setItem('result', JSON.stringify(payload.result))
      return cart
    }
    case GET_CART_SUCCESS: {
      const cart = {
        cartItems: payload.cart,
        result: payload.result,
        totalPrice: payload.totalPrice,
        id: payload.id
      }
      localStorage.setItem('result', JSON.stringify(payload.result))
      return cart
    }
    case GET_CART_FAIL: {
      localStorage.removeItem('result')
      return { ...state, cartItems: [], result: null, totalPrice: null }
    }
    case DELETE_CART_SUCCESS: {
      const cart = {
        cartItems: payload.cartItems,
        result: payload.result,
        totalPrice: payload.totalPrice
      }
      localStorage.setItem('result', JSON.stringify(payload.result))
      return cart
    }
    case UPDATE_CART_SUCCESS: {
      return { ...state, cartItems: payload.cartItems, totalPrice: payload.totalPrice }
    }
    default:
      return state;
  }
}
export default cartReducer