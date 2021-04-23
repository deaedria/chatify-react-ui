const initialState = {
    data: [],
    loading: false
}

const FetchMessages = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'MESSAGE_LIST_REQUEST':
            return {
                ...state,
                loading: true
            }    
        case 'MESSAGE_LIST_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }    
        case 'MESSAGE_LIST_ERROR':
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
const AddMessages = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ADD_MESSAGE_REQUEST':
            return {
                ...state,
                loading: true
            }    
        case 'ADD_MESSAGE_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }    
        case 'ADD_MESSAGE_ERROR':
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
    FetchMessages,
    AddMessages
}