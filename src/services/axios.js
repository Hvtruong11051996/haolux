import axios from 'axios'
import queryString from 'query-string'
const axiosClient = axios.create({
  baseURL: '',
  paramsSerializer: params => queryString.stringify(params)
});

axiosClient.interceptors.request.use(async (config) => {
  const user = JSON.parse(localStorage.getItem('userInfo'))
  if (user) {
    config.headers.Authorization = 'Bearer ' + user.token
  }
  return config
})

axiosClient.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  throw error;
});

export default axiosClient