import axios from "axios"

// 设置默认url
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.timeout = 10000;


export default axios