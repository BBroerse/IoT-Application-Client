import axios from 'axios';
import config from '../../config'

const service = axios.create({
  baseURL: config.BASE_API, 
  // timeout: 5000  
})

// service.interceptors.response.use(
//   response => response,
//   error => {
//     console.warn(error) // for debugging
//   }
// )

export default service