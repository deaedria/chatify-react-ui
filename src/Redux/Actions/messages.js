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

export const AddMessages = (userToken, dataToken, contact, formData) => {
    return (dispatch) => {
        dispatch(AddMessageRequest())
        return axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}message/key`,
            data: {
                content: formData.content,
                sender_id: dataToken.user_id
            },
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