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