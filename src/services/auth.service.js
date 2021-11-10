import { loginApi } from 'api/auth.api';
import {
    loginAction,
    beforeLoginAction,
    errorLoginAction
} from 'redux/actions';

const loginService = (data) => () => (dispatch) => {
    beforeLoginAction();
    return loginApi(data)
        .then(res => {
            dispatch(loginAction(res.data));
            return res
        })
        .catch((err) => {
            dispatch(errorLoginAction(err));
        })
}

export {
    loginService,
}