import { GET_ORDERS_SUCCESS } from "../constants/orderConstants";


const initialValue = {
  orders: []
}


const orderReducer = (state = initialValue, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_ORDERS_SUCCESS: {
      return { ...state, orders: payload }
    }
    default:
      return state;
  }
}

export default orderReducer