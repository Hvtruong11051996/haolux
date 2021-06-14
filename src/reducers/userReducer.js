import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS
}
  from "../constants/userConstants";

const initialValue = JSON.parse(localStorage.getItem('userInfo')) || {
  name: '',
  email: '',
  cart: '',
  role: null,
  token: ''
}
const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      const { role, name, email, cart } = action.payload
      const { token } = action
      return { ...state, role, email, cart, name, token };
    }
    case REGISTER_SUCCESS: {
      const { role, name, email, cart } = action.payload
      const { token } = action
      return { ...state, role, email, cart, name, token };
    }
    case LOGOUT_SUCCESS: {
      const role = '', name = '', email = '', cart = ''
      return { ...state, role, email, cart, name, token: '' };
    }
    default:
      return state;
  }
}
export default userReducer