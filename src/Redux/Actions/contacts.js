import axios from 'axios'

const ContactListRequest = () => {return {type: 'CONTACT_LIST_REQUEST'}}
const ContactListSuccess = (data) => {return {type: 'CONTACT_LIST_SUCCESS',payload: data}}
const ContactListError = (err) => {return {type: 'CONTACT_LIST_ERROR',payload: err}}

export const FetchContacts = (dataToken) => {
    return (dispatch) => {
        dispatch(ContactListRequest())
        return axios({
            url: `${process.env.REACT_APP_API_URL}contactlist/user_id?id=${dataToken.user_id}`,
            method: 'GET'
        }).then((res) => {
            dispatch(ContactListSuccess(res.data.data))
        }).catch((err) => {
            dispatch(ContactListError(err))
        })
    }
}

const AddContactRequest = () => {return {type: 'ADD_CONTACT_REQUEST'}}
const AddContactSuccess = (data) => {return {type: 'ADD_CONTACT_SUCCESS',payload: data}}
const AddContactError = (err) => {return {type: 'ADD_CONTACT_ERROR',payload: err}}

export const AddContactsList = (formData, dataToken) => {
    return (dispatch) => {
        dispatch(AddContactRequest())
        return axios({
            url: `${process.env.REACT_APP_API_URL}contactlist/user_id?id=${dataToken.user_id}`,
            method: 'POST',
            data: formData
        }).then((res) => {
            dispatch(AddContactSuccess(res.data.data))
        }).catch((err) => {
            dispatch(AddContactError(err))
        })
    }
}