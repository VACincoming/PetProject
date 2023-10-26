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
    if (localStorage.getItem('authorization')) {
        headers.authorization = localStorage.getItem('authorization');
    }
    return axios({
        url,
        method,
        headers,
        params,
        data,
    })
        .then((res) => res);
    // .catch((err) => {
    //     console.log(err.message);
    //     throw new Error(err.message);
    // });
};

export default request;
