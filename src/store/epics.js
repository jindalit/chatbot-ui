import values from 'lodash/fp/values'
import { combineEpics } from 'redux-observable'
import { epics as login } from '../state/login'
import { epics as home } from '../state/dashboard'
import { epics as chat } from '../state/chat'


export default combineEpics(
    ...values(login),
    ...values(home),
    ...values(chat)
)