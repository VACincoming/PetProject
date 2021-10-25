import makeRequest from './makeRequest';

const apiUrl = 'https://back-finder.herokuapp.com';

const createPostApi = (data) => {
    console.log('6', data)
    return makeRequest({
        method: 'POST',
        url: `${apiUrl}/create`,
        data
    })
};

export {
    createPostApi
}
