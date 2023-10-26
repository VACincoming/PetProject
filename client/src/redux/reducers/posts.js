const PostsReducer = (state = {
    loading: true,
    error: null,
    posts: [],
    post: null,
    myPosts: []
}, action) => {
    switch (action.type) {
    case 'FETCH_MYPOSTS_SUCCESS':
        return {
            ...state,
            myPosts: action.payload,
            error: null,
            loading: false,
        };
    case 'FETCH_MYPOSTS_REQUEST':
        return {
            ...state,
            myPosts: null,
            error: null,
            loading: true,
        };
    case 'FETCH_MYPOSTS_ERROR':
        return {
            ...state,
            myPosts: null,
            error: action.payload,
            loading: false
        };
    case 'FETCH_POSTS_SUCCESS':
        return {
            ...state,
            posts: action.payload,
            error: null,
            loading: false,
        };
    case 'FETCH_POSTS_REQUEST':
        return {
            ...state,
            posts: null,
            error: null,
            loading: true,
        };
    case 'FETCH_POSTS_ERROR':
        return {
            ...state,
            posts: null,
            error: action.payload,
            loading: false
        };
    case 'FETCH_POST_SUCCESS':
        return {
            ...state,
            post: action.payload,
            error: null,
            loading: false,
        };
    case 'FETCH_POST_REQUEST':
        return {
            ...state,
            post: null,
            error: null,
            loading: true,
        };
    case 'FETCH_POST_ERROR':
        return {
            ...state,
            post: null,
            error: action.payload,
            loading: false
        };
    default:
        return state;
    }
};
export default PostsReducer;
