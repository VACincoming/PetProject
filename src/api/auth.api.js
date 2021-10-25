import makeRequest from './makeRequest';

const apiUrl = 'https://back-finder.herokuapp.com'

const registrationApi = (data) => {
    return makeRequest({
        method: 'POST',
        url: `${apiUrl}/registration`,
        data
    })
};

const activationCodeApi = (code) => {
    return makeRequest({ url: `${apiUrl}/${code}` });
};

const loginApi = (data) => {
    return makeRequest({
        method: 'POST',
        url: `${apiUrl}/login`,
        data
    })
};

export {
    registrationApi,
    loginApi,
    activationCodeApi
}