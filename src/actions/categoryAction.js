import categoryApi from "../api/categoryApi"
import { GET_ALL_CATEGORY_FAIL, GET_ALL_CATEGORY_REQUEST, GET_ALL_CATEGORY_SUCCESS } from "../constants/categoryConstants"




export const actionGetAllCategory = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_CATEGORY_REQUEST })
    try {
      const res = await categoryApi.getAllCategory()
      const { categories } = res.data
      dispatch({ type: GET_ALL_CATEGORY_SUCCESS, payload: categories })
      return res
    }
    catch (err) {
      dispatch({ type: GET_ALL_CATEGORY_FAIL })
      return err
    }
  }
}