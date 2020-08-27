import axios from 'axios'
import {API_ROOT_URL} from '../config/config'
export default axios.create({
    baseURL: `${API_ROOT_URL}`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
    }
})
