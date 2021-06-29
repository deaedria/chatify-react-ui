import axios from 'axios'

const MessageListRequest = () => {return {type: 'MESSAGE_LIST_REQUEST'}}
const MessageListSuccess = (data) => {return {type: 'MESSAGE_LIST_SUCCESS',payload: data}}
const MessageListError = (err) => {return {type: 'MESSAGE_LIST_ERROR',payload: err}}

export const FetchMessages = (userToken, dataToken, contact) => {
    return (dispatch) => {
        dispatch(MessageListRequest())
        return axios.get(`${process.env.REACT_APP_API_URL}message/key`, {
            params: {
                id: dataToken.user_id,
                contact_id: contact
            },
            headers: {
                'user-token': `Bearer ${userToken}`
            }
        }).then((res) => {
            dispatch(MessageListSuccess(res.data.data))
        }).catch((err) => {
            dispatch(MessageListError(err))
        })
    }
}

const AddMessageRequest = () => {return {type: 'ADD_MESSAGE_REQUEST'}}
const AddMessageSuccess = (data) => {return {type: 'ADD_MESSAGE_SUCCESS',payload: data}}
const AddMessageError = (err) => {return {type: 'ADD_MESSAGE_ERROR',payload: err}}

export const AddMessages = (userToken, dataToken, contact, myData) => {
    console.log(myData)
    return (dispatch) => {
        dispatch(AddMessageRequest())
        return axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}message/key`,
            data: myData,
            params: {
                id: dataToken.user_id,
                contact_id: contact
            },
            headers: {
                'user-token': `Bearer ${userToken}`
            }
        }).then((res) => {
            console.log(res.data.data)
            dispatch(AddMessageSuccess(res.data.data))
        }).catch((err) => {
            dispatch(AddMessageError(err?.response?.data?.message ?? null))
        })
    }
}

const DelMessageRequest = () => {return {type: 'DEL_MESSAGE_REQUEST'}}
const DelMessageSuccess = (data) => {return {type: 'DEL_MESSAGE_SUCCESS',payload: data}}
const DelMessageError = (err) => {return {type: 'DEL_MESSAGE_ERROR',payload: err}}

export const DelMessages = (id) => {
    return (dispatch) => {
        dispatch(DelMessageRequest())
        return axios.delete(`${process.env.REACT_APP_API_URL}message/${id}`)
        .then((res) => {
            dispatch(DelMessageSuccess(res.data.data))
        }).catch((err) => {
            dispatch(DelMessageError(err))
        })
    }
}

const SearchMessageRequest = () => {return {type: 'SEARCH_MESSAGE_REQUEST'}}
const SearchMessageSuccess = (data) => {return {type: 'SEARCH_MESSAGE_SUCCESS',payload: data}}
const SearchMessageError = (err) => {return {type: 'SEARCH_MESSAGE_ERROR',payload: err}}

export const SearchMessages = (keyword, id, userToken) => {
    // console.log(keyword)
    // console.log(id)
    return (dispatch) => {
        dispatch(SearchMessageRequest())
        return axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}message/search?keyword=${keyword}&id=${id}`,
            headers: {
                'user-token': `Bearer ${userToken}`
            }
        }).then((res) => {
            dispatch(SearchMessageSuccess(res.data.data))
        }).catch((err) => {
            dispatch(SearchMessageError(err))
        })
    }
}

const StatusMessageRequest = () => {return {type: 'STATUS_MESSAGE_REQUEST'}}
const StatusMessageSuccess = (data) => {return {type: 'STATUS_MESSAGE_SUCCESS',payload: data}}
const StatusMessageError = (err) => {return {type: 'STATUS_MESSAGE_ERROR',payload: err}}

export const UpdStatusMessages = (sc_id, sender_id, contact_account) => {
    return (dispatch) => {
        dispatch(StatusMessageRequest())
        return axios.patch(`${process.env.REACT_APP_API_URL}message/chat?id=${sc_id}&sender_id=${sender_id}&contact_id=${contact_account}`)
        .then((res) => {
            dispatch(StatusMessageSuccess(res.data.data))
        }).catch((err) => {
            dispatch(StatusMessageError(err))
        })
    }
}