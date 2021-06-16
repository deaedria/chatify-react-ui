import { combineReducers } from 'redux'
import { UserLogin, UserRegister } from './users'
import { FetchChats } from './chats'
import { FetchMessages, AddMessages, DelMessages, SearchMessages } from './messages'

const reducers = combineReducers({
    FetchChats,
    FetchMessages,
    AddMessages,
    DelMessages,
    SearchMessages,
    UserLogin,
    UserRegister
})

export default reducers