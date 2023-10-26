import makeRequest from './makeRequest';

const apiUrl = `${process.env.REACT_APP_API_URL}`;

const registrationApi = (data) => makeRequest({
    method: 'POST',
    url: `${apiUrl}/registration`,
    data
});

const activationCodeApi = (code) => makeRequest({ url: `${apiUrl}/${code}` });

const loginApi = (data) => makeRequest({
    method: 'POST',
    url: `${apiUrl}/login`,
    data
});

const updateUser = (data, id) => makeRequest({
    method: 'PUT',
    url: `${apiUrl}/users/${id}`,
    data
});

const getUserApi = () => makeRequest({
    method: 'GET',
    url: `${apiUrl}/users/me`
});

export {
    registrationApi,
    loginApi,
    activationCodeApi,
    getUserApi,
    updateUser
};
