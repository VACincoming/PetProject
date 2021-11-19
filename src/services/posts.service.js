import { getPosts, searchPosts } from 'api/posts.api';
import {
    getPostsAction,
    beforeGetPostsAction,
    errorGetPostsAction
} from 'redux/actions';

const getPostsService = () => () => (dispatch) => {
    console.log('99')
    beforeGetPostsAction();
    return getPosts()
        .then(res => {
            dispatch(getPostsAction(res.data));
            return res
        })
        .catch((err) => {
            dispatch(errorGetPostsAction(err));
        })
}

const searchPostsService = (search) => () => (dispatch) => {
    beforeGetPostsAction();
    return searchPosts(search)
        .then(res => {
            dispatch(getPostsAction(res.data));
            return res
        })
        .catch((err) => {
            dispatch(errorGetPostsAction(err));
        })
}

export {
    getPostsService,
    searchPostsService
}