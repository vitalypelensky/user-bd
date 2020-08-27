import axios from '../plugins/axios'

export const api_user_list = () => {
    return axios.get('/task0/users ')
}
