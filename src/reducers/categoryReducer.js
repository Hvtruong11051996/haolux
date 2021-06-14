import { GET_ALL_CATEGORY_SUCCESS } from "../constants/categoryConstants";


const initialValue = []

const categoryReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY_SUCCESS:
      const newCategory = [...action.payload]
      return newCategory;
    default:
      return state;
  }
}

export default categoryReducer
