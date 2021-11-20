import {
    getUserApi,
    loginApi
} from 'api/auth.api';
import dispatchAction from 'helpers/dispatchUtility';

const actionCreator = {
    getUser: () => dispatch => {
        dispatch(dispatchAction('FETCH_USER_REQUEST'));
        return (
            getUserApi()
                .then(response => {
                    dispatch(dispatchAction('FETCH_USER_SUCCESS', response.data));
                })
                .catch(error => {
                    dispatch(dispatchAction('FETCH_USER_ERROR', error));
                    throw error;
                })
        )
    },
    loginUser: (data) => dispatch => {
        dispatch(dispatchAction('FETCH_USER_REQUEST'));
        return (
            loginApi(data)
                .then(response => {
                    localStorage.setItem('authorization', response.data.token);
                    dispatch(dispatchAction('FETCH_USER_SUCCESS', response.data));
                })
                .catch(error => {
                    dispatch(dispatchAction('FETCH_USER_ERROR', error));
                    throw error;
                })
        )
    }
}

export default actionCreator;
