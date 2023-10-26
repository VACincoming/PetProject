import {
    searchPosts,
    getPosts,
    getMyPosts,
    getPost,
    deletePost
} from 'api/posts.api';
import dispatchAction from 'helpers/dispatchUtility';

const actionCreator = {
    getPosts: () => (dispatch) => {
        dispatch(dispatchAction('FETCH_POSTS_REQUEST'));
        return (
            getPosts()
                .then((response) => {
                    dispatch(dispatchAction('FETCH_POSTS_SUCCESS', response.data));
                })
                .catch((error) => {
                    dispatch(dispatchAction('FETCH_POSTS_ERROR', error));
                    throw error;
                })
        );
    },
    getMyPosts: () => (dispatch) => {
        dispatch(dispatchAction('FETCH_MYPOSTS_REQUEST'));
        return (
            getMyPosts()
                .then((response) => {
                    dispatch(dispatchAction('FETCH_MYPOSTS_SUCCESS', response.data));
                })
                .catch((error) => {
                    dispatch(dispatchAction('FETCH_MYPOSTS_ERROR', error));
                    throw error;
                })
        );
    },
    getPost: (id) => (dispatch) => {
        dispatch(dispatchAction('FETCH_POST_REQUEST'));
        return getPost(id)
            .then((response) => {
                dispatch(dispatchAction('FETCH_POST_SUCCESS', response.data));
            })
            .catch((error) => {
                dispatch(dispatchAction('FETCH_POST_ERROR', error));
                throw error;
            });
    },
    searchPosts: (search) => (dispatch) => {
        dispatch(dispatchAction('FETCH_POSTS_REQUEST'));
        return (
            searchPosts(search)
                .then((response) => {
                    dispatch(dispatchAction('FETCH_POSTS_SUCCESS', response.data));
                })
                .catch((error) => {
                    dispatch(dispatchAction('FETCH_POSTS_ERROR', error));
                    throw error;
                })
        );
    },
    deletePost: (id) => (dispatch) =>
        // dispatch(dispatchAction('FETCH_POSTS_REQUEST'));
        (
            deletePost(id)
                .then(() => getPosts())
                .then((response) => {
                    dispatch(dispatchAction('FETCH_POSTS_SUCCESS', response.data));
                })
                .catch((error) => {
                    dispatch(dispatchAction('FETCH_POSTS_ERROR', error));
                    throw error;
                })
        )

};

export default actionCreator;
