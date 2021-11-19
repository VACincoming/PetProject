const PostsReducer = (
    state = {
        loading: false,
        error: null,
        posts: [],
    }, action) => {
    switch (action.type) {
        case 'FETCH_POSTS_SUCCESS':
            return {
                ...state,
                posts: action.payload,
                error: null,
                loading: false,
            }
        case 'FETCH_POSTS_REQUEST':
            return {
                ...state,
                posts: null,
                error: null,
                loading: true,
            }
        case 'FETCH_POSTS_ERROR':
            return {
                ...state,
                posts: null,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}
export default PostsReducer;