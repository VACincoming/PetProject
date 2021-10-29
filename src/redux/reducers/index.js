const initialState = {
    user: null,
    loading: true,
    error: null,
    language: 'ua'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER_SUCCESS':
            return {
                ...state,
                user: action.payload,
                error: null
            }
        case 'FETCH_USER_REQUEST':
            return {
                ...state,
                user: [],
                error: null,
            }
        case 'FETCH_USER_ERROR':
            return {
                ...state,
                user: [],
                error: action.payload,
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