const initialState = {
    data: [],
    loading: false,
    error: null
}

const UserLogin = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
            return {
                ...state,
                loading: true
            }    
        case 'USER_LOGIN_SUCCESS':
            return {
                ...state,
                loading: false,
                isLogin: true,
                error: null,
                data: action.payload
            }    
        case 'USER_LOGIN_ERROR':
            return {
                ...state,
                loading: false,
                isLogin: false,
                error: action.payload,
                data: []
            }    
        case 'USER_LOGOUT':
            return {
                ...state,
                loading: false,
                isLogin: false,
                _persist: {
                    ryhydrate: true,
                    version: -1
                }
            }    
        default:
            return state
    }
}

const UserRegister = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'USER_REGISTER_REQUEST':
            return {
                ...state,
                loading: true
            }    
        case 'USER_REGISTER_SUCCESS':
            return {
                ...state,
                loading: false,
                isRegister: true,
                error: null,
                data: action.payload
            }    
        case 'USER_REGISTER_ERROR':
            return {
                ...state,
                loading: false,
                isRegister: false,
                error: action.payload,
                data: []
            }    
        default:
            return state
    }
}

export{
    UserLogin,
    UserRegister
}