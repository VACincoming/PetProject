const UserReducer = (state = {
    loading: true,
}, action) => {
    switch (action.type) {
    case 'FETCH_LOADER_TRUE':
        return {
            loading: true
        };
    case 'FETCH_LOADER_FALSE':
        return {
            loading: false
        };
    default:
        return state;
    }
};
export default UserReducer;
