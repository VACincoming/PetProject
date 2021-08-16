import axios from 'axios';
import config from './config';

const request = ({
    url ='/',
    method = 'GET',
    params = {},
    data = {},
    headers = {},
}) => {
    if (headers && headers.authorization) {
        headers.authorization = config.token;
    }
    return axios({
        url,
        method, 
        headers,
        params, 
        data,
    });
}

export default request;