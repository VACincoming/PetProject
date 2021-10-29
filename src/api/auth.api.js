import makeRequest from './makeRequest';

const apiUrl = `${process.env.REACT_APP_API_URL}`;

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

const loginApi = async (data) => {
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