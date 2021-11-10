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

const loginApi = (data) => {
    return makeRequest({
        method: 'POST',
        url: `${apiUrl}/login`,
        data
    })
};

const getUserApi = () => {
    return makeRequest({
        method: 'GET',
        url: `${apiUrl}/users/me`
    })
}

export {
    registrationApi,
    loginApi,
    activationCodeApi,
    getUserApi
}