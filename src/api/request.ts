import axios from 'axios';
import showMessage from '@/utils/showMessage';

const ins = axios.create({
  baseURL: 'https://mock.mengxuegu.com/mock/6800fa6b80a48b3de1e17254/blog',
  timeout: 3000,
})
ins.interceptors.response.use(
  (res) => {
    const { data } = res
    if (data.code !== 0) {
      showMessage({
        type: 'error',
        content: data.msg,
        duration: 1500,
      })
      return Promise.reject(data)
    }
    return data
  },
  (err) => {
    showMessage({
      type: 'error',
      content: err.message,
    })
    return Promise.reject(err)
  },
)

export default ins
