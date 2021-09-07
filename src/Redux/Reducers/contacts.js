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

const AddContactsList = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ADD_CONTACT_REQUEST':
            return {
                ...state,
                loading: true
            }    
        case 'ADD_CONTACT_SUCCESS':
            return {
                ...state,
                loading: false,
                isAdded: true,
                error: null,
                data: action.payload
            }    
        case 'ADD_CONTACT_ERROR':
            return {
                ...state,
                loading: false,
                isAdded: false,
                error: action.payload.response.data,
                data: []
            }    
        default:
            return state
    }
}

export{
    FetchContacts,
    AddContactsList
}