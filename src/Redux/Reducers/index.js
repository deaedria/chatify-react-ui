import { combineReducers } from 'redux'
import { UserLogin, UserRegister } from './users'
import { FetchChats, AddChats, DelChats } from './chats'
import { FetchContacts, AddContactsList } from './contacts'
import { FetchMessages, AddMessages, DelMessages, SearchMessages, UpdStatusMessages } from './messages'

const reducers = combineReducers({
    FetchChats,
    AddChats,
    DelChats,
    FetchContacts,
    AddContactsList,
    FetchMessages,
    AddMessages,
    DelMessages,
    SearchMessages,
    UpdStatusMessages,
    UserLogin,
    UserRegister
})

export default reducers