import { loginApi } from "api/auth.api";

const loginAction = (data) => (dispatch) => {
    console.log(data, '4')
    return loginApi(data).then(res => {
        console.log(res);
        dispatch(() => {
            return {
                type: 'SET_ARTICLE_DETAILS',
                payload: res
            }
        })
    })
}

export {
    loginAction
}