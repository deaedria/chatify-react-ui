import axios from 'axios'

const ChatListRequest = () => {return {type: 'CHAT_LIST_REQUEST'}}
const ChatListSuccess = (data) => {return {type: 'CHAT_LIST_SUCCESS',payload: data}}
const ChatListError = (err) => {return {type: 'CHAT_LIST_ERROR',payload: err}}

export const FetchChats = (userToken, dataToken) => {
    return (dispatch) => {
        dispatch(ChatListRequest())
        return axios({
            url: `${process.env.REACT_APP_API_URL}chatlist/user_id`,
            method: 'GET',
            params: {
                id: dataToken.user_id
            },
            headers: {
                'user-token': `Bearer ${userToken}`
            }
        }).then((res) => {
            dispatch(ChatListSuccess(res.data.data))
        }).catch((err) => {
            dispatch(ChatListError(err))
        })
    }
}

const AddChatRequest = () => {return {type: 'ADD_CHAT_REQUEST'}}
const AddChatSuccess = (data) => {return {type: 'ADD_CHAT_SUCCESS',payload: data}}
const AddChatError = (err) => {return {type: 'ADD_CHAT_ERROR',payload: err}}

export const AddChats = (user_id, contact_id) => {
    return (dispatch) => {
        dispatch(AddChatRequest())
        return axios({
            url: `${process.env.REACT_APP_API_URL}chatlist/user`,
            method: 'POST',
            params: {
                user_id: user_id,
                contact_id: contact_id
            }
        }).then((res) => {
            dispatch(AddChatSuccess(res.data.data))
        }).catch((err) => {
            dispatch(AddChatError(err))
        })
    }
}

const DelChatRequest = () => {return {type: 'DEL_CHAT_REQUEST'}}
const DelChatSuccess = (data) => {return {type: 'DEL_CHAT_SUCCESS',payload: data}}
const DelChatError = (err) => {return {type: 'DEL_CHAT_ERROR',payload: err}}

export const DelChats = (sc_id) => {
    console.log(sc_id)
    return (dispatch) => {
        dispatch(DelChatRequest())
        return axios({
            url: `${process.env.REACT_APP_API_URL}chatlist/${sc_id}`,
            method: 'DELETE',
        }).then((res) => {
            dispatch(DelChatSuccess(res.data.data))
        }).catch((err) => {
            dispatch(DelChatError(err))
        })
    }
}