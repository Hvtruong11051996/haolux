import { URL_API } from "../constants"
import axiosClient from "../services/axios"
const productApi = {
  getAllProduct: () => {
    const url = `${URL_API}/products/initial-data`
    const res = axiosClient.get(url)
    return res
  },
  getProductSlug: (slug) => {
    const url = `${URL_API}/products/detail/${slug}`
    const res = axiosClient.get(url)
    return res
  },
  getProduct: (url) => {
    const res = axiosClient.get(url)
    return res
  },
  searchProduct: (search) => {
    const url = `${URL_API}/products?search=${search}`
    return axiosClient.get(url)
  }
}

export default productApi