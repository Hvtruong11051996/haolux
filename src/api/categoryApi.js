import { URL_API } from "../constants"
import axiosClient from "../services/axios"


const categoryApi = {
  getAllCategory: () => {
    const url = `${URL_API}/category`
    const res = axiosClient.get(url)
    return res
  }
}

export default categoryApi