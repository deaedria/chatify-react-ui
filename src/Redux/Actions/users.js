import axios from 'axios'

const UserLoginRequest = () => { return { type: 'USER_LOGIN_REQUEST' } }
const UserLoginSuccess = (data) => { return { type: 'USER_LOGIN_SUCCESS', payload: data } }
const UserLoginError = (err) => { return { type: 'USER_LOGIN_ERROR', payload: err } }

export const UserLogin = (formData) => {
    return (dispatch) => {
        dispatch(UserLoginRequest())
        return axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}users/login`,
            data: formData
        }).then((res) => {
            dispatch(UserLoginSuccess(res.data.data))
        }).catch((err) => {
            const error = err?.response?.data?.message ?? null
            dispatch(UserLoginError(error))
        })
    }
}

const UserRegisterRequest = () => { return { type: 'USER_REGISTER_REQUEST' } }
const UserRegisterSuccess = (data) => { return { type: 'USER_REGISTER_SUCCESS', payload: data } }
const UserRegisterError = (err) => { return { type: 'USER_REGISTER_ERROR', payload: err } }

export const UserRegister = (formData) => {
    return (dispatch) => {
        dispatch(UserRegisterRequest())
        return axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}users/register`,
            data: formData
        }).then((res) => {
            dispatch(UserRegisterSuccess(res.data.data))
        }).catch((err) => {
            const error = err?.response?.data?.message ?? null
            dispatch(UserRegisterError(error))
        })
    }
}


export const UserLogout = () => { return { type: 'USER_LOGOUT' } }