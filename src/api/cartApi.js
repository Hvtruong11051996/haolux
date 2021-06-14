import { URL_API } from "../constants"
import axiosClient from "../services/axios"


const cartApi = {
  addToCart: (cartItem) => {
    const url = `${URL_API}/cart/create`
    const res = axiosClient.post(url, cartItem)
    return res
  },
  updateCart: (quantity, size, slug) => {
    const url = `${URL_API}/cart/update/${slug}?size=${size}&quantity=${quantity}`
    return axiosClient.post(url)
  },
  removeCartItem: (id) => {
    console.log(id);
    const url = `${URL_API}/cart/remove/${id}`
    console.log(url);
    return axiosClient.delete(url)
  },
  getCart: () => {
    const url = `${URL_API}/cart`
    return axiosClient.get(url)
  }
}
export default cartApi