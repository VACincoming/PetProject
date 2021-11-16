import makeRequest from './makeRequest';

const apiUrl = `${process.env.REACT_APP_API_URL}`;

const createPostApi = (data) => {
    return makeRequest({
        method: 'POST',
        url: `${apiUrl}/posts`,
        data
    })
};

const getPosts = () => {
    return makeRequest({
        url: `${apiUrl}/posts`,
    })
}

const getLastPosts = () => {
    return makeRequest({
        url: `${apiUrl}/posts/last-ten`
    })
}

export {
    getLastPosts,
    createPostApi,
    getPosts
}
