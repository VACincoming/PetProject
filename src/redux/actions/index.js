const loginAction = (data) => ({
    type: 'FETCH_USER_SUCCESS',
    payload: data
});

const beforeLoginAction = () => ({
    type: 'FETCH_USER_REQUEST'
});

const errorLoginAction = (data) => ({
    type: 'FETCH_USER_ERROR',
    payload: data
});

export {
    loginAction,
    beforeLoginAction,
    errorLoginAction
}