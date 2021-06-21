const initialState = {
    data: [],
    loading: false
}

const FetchChats = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'CHAT_LIST_REQUEST':
            return {
                ...state,
                loading: true
            }    
        case 'CHAT_LIST_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }    
        case 'CHAT_LIST_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
            }    
        default:
            return state
    }
}

const AddChats = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ADD_CHAT_REQUEST':
            return {
                ...state,
                loading: true
            }    
        case 'ADD_CHAT_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }    
        case 'ADD_CHAT_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
            }    
        default:
            return state
    }
}
const DelChats = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'DEL_CHAT_REQUEST':
            return {
                ...state,
                loading: true
            }    
        case 'DEL_CHAT_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }    
        case 'DEL_CHAT_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
            }    
        default:
            return state
    }
}

export{
    FetchChats,
    AddChats,
    DelChats
}