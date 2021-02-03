import { combineReducers } from 'redux'
import login from '../state/login'
import home from '../state/dashboard'
import attrition from '../state/attrition'
import chat from '../state/chat'

export default combineReducers({
    login,
    home,
    chat,
    attrition
})