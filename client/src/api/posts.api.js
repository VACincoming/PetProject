import makeRequest from './makeRequest';

const apiUrl = `${process.env.REACT_APP_API_URL}`;

const createPostApi = (data) => makeRequest({
    method: 'POST',
    url: `${apiUrl}/posts`,
    data
});

const deletePost = (id) => makeRequest({
    method: 'DELETE',
    url: `${apiUrl}/posts/${id}`,
});

const getPosts = () => makeRequest({
    url: `${apiUrl}/posts`,
});

const getMyPosts = () => makeRequest({
    url: `${apiUrl}/posts/my`,
});

const getPost = (id) => makeRequest({
    url: `${apiUrl}/posts/${id}`,
});

const getLastPosts = () => makeRequest({
    url: `${apiUrl}/posts/last-ten`
});

const searchPosts = (searchString) => makeRequest({
    url: `${apiUrl}/posts?searchString=${searchString}`
});

export {
    deletePost,
    searchPosts,
    getLastPosts,
    createPostApi,
    getPosts,
    getPost,
    getMyPosts
};
