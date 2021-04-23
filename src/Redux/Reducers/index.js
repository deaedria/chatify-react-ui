import { combineReducers } from 'redux'
import { UserLogin, UserRegister } from './users'
import { FetchChats } from './chats'
import { FetchMessages, AddMessages } from './messages'

const reducers = combineReducers({
    FetchChats,
    FetchMessages,
    AddMessages,
    UserLogin,
    UserRegister
})

export default reducers