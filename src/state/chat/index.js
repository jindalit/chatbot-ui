import { switchMap, catchError, map } from 'rxjs/operators'
import { of, from } from 'rxjs'
import { ofType } from 'redux-observable'
import axios from 'axios'
import Services from '../../constant'

// Action-type
export const MESSAGE_SEND = 'MESSAGE_SEND'
export const MESSAGE_SUCCESS = 'MESSAGE_SUCCESS'
export const SEARCH_SEND = 'SEARCH_SEND'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const FETCH_QUESTION = 'FETCH_QUESTION'
export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS'
export const SUBMIT_QUESTION = 'SUBMIT_QUESTION'
export const SUBMIT_QUESTION_SUCCESS = 'SUBMIT_QUESTION_SUCCESS'

//Actions

export const messageDispatch = payload => ({ type: MESSAGE_SEND, payload })
export const messageSuccess = payload => ({ type: MESSAGE_SUCCESS, payload })
export const searchDispatch = payload => ({ type: SEARCH_SEND, payload })
export const searchSuccess = payload => ({ type: SEARCH_SUCCESS, payload })
export const fetchQuestion = () => ({ type: FETCH_QUESTION })
export const fetchQuestionSuccess = payload => ({ type: FETCH_QUESTION_SUCCESS, payload })
export const submitQuestion = payload => ({ type: SUBMIT_QUESTION, payload })
export const submitQuestionSuccess = payload => ({ type: SUBMIT_QUESTION_SUCCESS, payload })

export const epics = {
  chat: (action$, state$) =>
    action$.pipe(
      ofType(MESSAGE_SEND),
      switchMap(({ payload }) => {
        const formdata = {
          "emailId": JSON.parse(sessionStorage.getItem('user')).emailId,
          "question": payload,
          "msg_by": "me"
        }
        return from(
          axios.post(Services.baseUrl + Services.chat, formdata, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
        ).pipe(
          map(response => messageSuccess(response)),
          catchError(error => of(console.error(error)))
        )
      })
    ),
  search: (action$, state$) =>
    action$.pipe(
      ofType(SEARCH_SEND),
      switchMap(({ payload }) => {

        return from(
          axios.post(Services.baseUrl + Services.chatQuestion, payload, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
        ).pipe(
          map(response => searchSuccess(response)),
          catchError(error => of(console.error(error)))
        )
      })
    ),
  question: (action$, state$) =>
    action$.pipe(
      ofType(FETCH_QUESTION),
      switchMap(({ payload }) => {
        return from(
          axios.get(Services.baseUrl + Services.questionList, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
        ).pipe(
          map(response => fetchQuestionSuccess(response)),
          catchError(error => of(console.error(error)))
        )
      })
    ),
  submitQuestion: (action$, state$) =>
    action$.pipe(
      ofType(SUBMIT_QUESTION),
      switchMap(({ payload }) => {
        const formdata = {
          "emailId": JSON.parse(sessionStorage.getItem('user')).emailId,
          "serveyAnswerList": payload
        }
        return from(
          axios.post(Services.baseUrl + Services.submitQuestion, formdata, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
        ).pipe(
          map(response => submitQuestionSuccess(response)),
          catchError(error => of(console.error(error)))
        )
      })
    )
}
export const initialState = {
  chats: [],
  feedback: false,
  searchQuestion: []
}

// REDUCERS
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MESSAGE_SUCCESS:
      const getUserChat = sessionStorage.getItem('chats') ? JSON.parse(sessionStorage.getItem('chats')) : []
      sessionStorage.setItem('chats', JSON.stringify([...getUserChat, action.payload.data]))
      return {
        ...state,
        chats: [...state.chats, action.payload.data]
      }
    case FETCH_QUESTION_SUCCESS:
      return {
        ...state,
        questions: action.payload.data.serveyQuestionList
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        searchQuestion: action.payload.data.questions
      }
    case SUBMIT_QUESTION_SUCCESS:
      alert('Feedback submitted successfully.')
      return {
        ...state,
        feedback: true
      }
    default:
      return state
  }
}
export const getChat = state => state.chat.chats
export const getQuestion = state => state.chat.questions
export const getFeedback = state => state.chat.feedback
export const getSuggestQuestion = state => state.chat.searchQuestion
