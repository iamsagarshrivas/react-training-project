import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	headers: {
		'content-type': "application/json; charset=utf-8"
	}
})

axiosInstance.interceptors.request.use(config => {
	let token = 'some-random-token-value-from-localStorage';
	config.headers['Authorization'] = `Bearer ${token}`
	return config
})

axiosInstance.interceptors.response.use(response => response.data)

export default axiosInstance