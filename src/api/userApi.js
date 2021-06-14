
import { URL_API } from "../constants"
import axiosClient from "../services/axios"

const userApi = {
  signup: (user) => {
    const url = `${URL_API}/user/signup`
    const res = axiosClient.post(url, user)
    return res
  },
  login: (user) => {
    const url = `${URL_API}/user/login`
    const res = axiosClient.post(url, user)
    return res
  },
  refreshToken: (refreshToken) => {
    const url = `${URL_API}/user/refresh-token`
    const res = axiosClient.post(url, { refToken: refreshToken })
    return res
  },
  logout: () => {
    const url = `${URL_API}/user/signout`
    const res = axiosClient.get(url)
    return res
  }
}

export default userApi