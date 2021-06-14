import axiosClient from "../services/axios"


export const addressApi = {
  getCity: () => {
    const url = 'https://thongtindoanhnghiep.co/api/city'
    return axiosClient.get(url)
  }
}