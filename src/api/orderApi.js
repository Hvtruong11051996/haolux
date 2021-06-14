import { URL_API } from "../constants"
import axiosClient from "../services/axios"



const orderApi = {
  postOrder: (order) => {
    const url = `${URL_API}/order/create`
    return axiosClient.post(url, order)
  },
  getOrders: () => {
    const url = `${URL_API}/order`
    return axiosClient.get(url)
  },
  removeOrder: (id) => {
    const url = `${URL_API}/order/${id}`
    return axiosClient.delete(url)
  }
}
export default orderApi