import makeRequest from './makeRequest';

const apiUrl = `${process.env.REACT_APP_API_URL}`;

const createPostApi = (data) => {
    return makeRequest({
        method: 'POST',
        url: `${apiUrl}/post`,
        data
    })
};

const getPosts = () => {
    return makeRequest({
        url: `${apiUrl}/post`,
    })
}

export {
    createPostApi,
    getPosts
}
