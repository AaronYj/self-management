import axios from "axios"

// 设置默认url
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.timeout = 10000;
// axios.defaults.withCredentials = true // 跨域请求可以携带cookie
// 设置请求头
// axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// axios.defaults.headers['token'] = localStorage.getItem('token') || ''
// axios.defaults.headers['Content-Type'] = 'application/json'

// axios.interceptors.response.use(res => {
//     if (typeof res.data !== 'object') {
//       Toast.fail('服务端异常!')
//       return Promise.reject(res)
//     }
//     if (res.status !== 200) {
//       if (res.data.message) Toast.fail(res.data.message)
//       if (res.data.code == 416) {
//         // 重新跳去登录页面
//         // router.push({path:'/login'})
//         Toast.fail('登录失效!')
//       }
//       return Promise.reject(res)
//     }
//     return res.data
//   })

export default axios