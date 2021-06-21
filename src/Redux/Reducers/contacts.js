const initialState = {
    data: [],
    loading: false
}

const FetchContacts = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'CONTACT_LIST_REQUEST':
            return {
                ...state,
                loading: true
            }    
        case 'CONTACT_LIST_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }    
        case 'CONTACT_LIST_ERROR':
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
    FetchContacts
}