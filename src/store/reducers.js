import { combineReducers } from 'redux'
import login from '../state/login'
import home from '../state/home'
import chat from '../state/chat'

export default combineReducers({
    login,
    home,
    chat
})