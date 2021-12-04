import makeRequest from './makeRequest';

const apiUrl = `${process.env.REACT_APP_API_URL}`;

const createPostApi = (data) => {
    return makeRequest({
        method: 'POST',
        url: `${apiUrl}/posts`,
        data
    })
};

const deletePost = (id) => {
    return makeRequest({
        method: "DELETE",
        url: `${apiUrl}/posts/${id}`,
    })
}

const getPosts = () => {
    return makeRequest({
        url: `${apiUrl}/posts`,
    })
}

const getMyPosts = () => {
    return makeRequest({
        url: `${apiUrl}/posts/my`,
    })
}

const getPost = (id) => {
    return makeRequest({
        url: `${apiUrl}/posts/${id}`,
    })
}

const getLastPosts = () => {
    return makeRequest({
        url: `${apiUrl}/posts/last-ten`
    })
}

const searchPosts = (searchString) => {
    return makeRequest({
        url: `${apiUrl}/posts?searchString=${searchString}`
    })
}

export {
    deletePost,
    searchPosts,
    getLastPosts,
    createPostApi,
    getPosts,
    getPost,
    getMyPosts
}
