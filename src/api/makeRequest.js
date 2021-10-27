import axios from 'axios';
import config from './config';

const request = ({
    url = '/',
    method = 'GET',
    params = {},
    data = {},
    headers = {},
}) => {
    if (headers && headers.authorization) {
        headers.authorization = config.token;
    }
    if (localStorage.getItem("Token")) {
        headers.Authorization = localStorage.getItem("Token");
    }
    return axios({
        url,
        method,
        headers,
        params,
        data,
    }).catch((err) => {
        throw new Error(err?.response?.data?.message)
    });
}

export default request;