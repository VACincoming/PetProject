const UserReducer = (state = {
    user: null,
    loading: false,
    error: null,
    language: 'ua'
}, action) => {
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
        case 'FETCH_LANGUAGE_SUCCESS':
            return {
                ...state,
                language: action.payload,
            }
        default:
            return state
    }
}
export default UserReducer;