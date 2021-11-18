const initialState = {
    user: null,
    loading: true,
    error: null,
    posts: [],
    language: 'ua'
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER_SUCCESS':
            return {
                ...state,
                user: action.payload,
                error: null,
                loading: false
            }
        case 'FETCH_USER_REQUEST':
            return {
                ...state,
                user: null,
                error: null,
                loading: true,
            }
        case 'FETCH_USER_ERROR':
            return {
                ...state,
                user: null,
                error: action.payload,
                loading: false
            }
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
        case 'FETCH_LANGUAGE_SUCCESS':
            return {
                ...state,
                language: action.payload,
            }
        default:
            return state
    }
}
export default reducer;