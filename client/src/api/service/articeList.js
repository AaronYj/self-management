// 文章管理相关接口
import axios from "../axios";
export function getArticeList () {
    return axios.get('/blog')
}

export function create (params) {
    return axios.post('/blog/new', params)
}

export function detail (id) {
    return axios.get(`/blog/${id}`)
}

export function toEdit (id) {
    return axios.get(`/blog/${id}/edit`)
}

export function editSubmit (params) {
    let id = params._id
    return axios.post(`/blog/${id}/edit`, params)
}

export function deleted (id) {
    return axios.get(`/blog/${id}/delete`)
}