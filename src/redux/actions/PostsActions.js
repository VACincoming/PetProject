import {
    searchPosts,
    getPosts
} from 'api/posts.api';
import dispatchAction from 'helpers/dispatchUtility';

const actionCreator = {
    getPosts: () => dispatch => {
        dispatch(dispatchAction('FETCH_POSTS_REQUEST'))
        return (
            getPosts()
                .then(response => {
                    dispatch(dispatchAction('FETCH_POSTS_SUCCESS', response.data));
                })
                .catch(error => {
                    dispatch(dispatchAction('FETCH_POSTS_ERROR', error));
                    throw error;
                })
        )
    },
    getPost: (id) => (dispatch) => {
        dispatch(dispatchAction('FETCH_POST_REQUEST'));
        return getPosts(id)
            .then(response => {
                dispatch(dispatchAction('FETCH_POST_SUCCESS', response.data));
            })
            .catch(error => {
                dispatch(dispatchAction('FETCH_POST_ERROR', error));
                throw error;
            })
    },
    searchPosts: (search) => dispatch => {
        dispatch(dispatchAction('FETCH_POSTS_REQUEST'));
        return (
            searchPosts(search)
                .then(response => {
                    dispatch(dispatchAction('FETCH_POSTS_SUCCESS', response.data));
                })
                .catch(error => {
                    dispatch(dispatchAction('FETCH_POSTS_ERROR', error));
                    throw error;
                })
        )
    }
}

export default actionCreator;
