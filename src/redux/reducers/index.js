const initialState = {
    user: [],
    users: [],
    loading: true,
    error: null,
    schedule: [],
    userAbsents: [],
    scheduleTime: [],
    registry: [],
    subjects: [],
    language: 'ua'
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
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