// 登录页api
import axios from '@/utils/myaxios.js'

// 登录验证
export const login = (data) => {
  return axios({
    url: 'login',
    method: 'post',
    data
  })
}
