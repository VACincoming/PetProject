import {
    getUserApi,
    loginApi
} from 'api/auth.api';
import dispatchAction from 'helpers/dispatchUtility';

const actionCreator = {
    getUser: () => dispatch =>
        getUserApi()
            .then(response => {
                dispatch(dispatchAction('FETCH_USER_SUCCESS', response.data));
            })
            .catch(error => {
                dispatch(dispatchAction('FETCH_USER_ERROR', error));
                throw error;
            }),
    loginUser: (data) => dispatch =>
        loginApi(data)
            .then(response => {
                dispatch(dispatchAction('FETCH_USER_SUCCESS', response.data));
            })
            .catch(error => {
                dispatch(dispatchAction('FETCH_USER_ERROR', error));
                throw error;
            })
}

export default actionCreator;
