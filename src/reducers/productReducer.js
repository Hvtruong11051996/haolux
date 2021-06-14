import { GET_ALL_PRODUCT_SUCCESS } from "../constants/productConstants";


const initialValue = {
  productList: [],
  saleProducts: [],
  newProducts: []
}

const productReducer = (state = initialValue, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_ALL_PRODUCT_SUCCESS:
      const { saleProducts, newProducts } = payload
      return { ...state, saleProducts, newProducts }
    default:
      return state;
  }
}

export default productReducer