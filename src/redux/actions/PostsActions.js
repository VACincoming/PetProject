import {
    searchPosts,
    getPosts
} from 'api/posts.api';
import dispatchAction from 'helpers/dispatchUtility';

const actionCreator = {
    getPosts: () => dispatch =>
        getPosts()
            .then(response => {
                dispatch(dispatchAction('FETCH_POSTS_SUCCESS', response.data));
            })
            .catch(error => {
                dispatch(dispatchAction('FETCH_POSTS_ERROR', error));
                throw error;
            }),
    searchPosts: (search) => dispatch =>
        searchPosts(search)
            .then(response => {
                dispatch(dispatchAction('FETCH_POSTS_SUCCESS', response.data));
            })
            .catch(error => {
                dispatch(dispatchAction('FETCH_POSTS_ERROR', error));
                throw error;
            })
}

export default actionCreator;
