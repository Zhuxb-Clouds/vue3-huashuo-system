import axios from 'axios'
const req = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL_SERVE, // url = base url + request url
    timeout: 5 * 60 * 1000 // request timeout
})

req.interceptors.response.use(
    response => {
        const res = response.data

        if (res.code === 401 || res.code === 'A0230') {
            return response
        } else {
            return res
        }
    },
    error => {
        if (axios.isCancel(error)) {
            return {}
        } else {
            return Promise.reject(error)
        }
    }
)

export default req