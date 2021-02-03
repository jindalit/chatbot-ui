import { switchMap, catchError, map } from 'rxjs/operators'
import { of, from } from 'rxjs'
import { ofType } from 'redux-observable'
import axios from 'axios'
import Services from '../../constant'

// Action-type
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const RESET_NEW_USER = 'RESET_NEW_USER'

//Actions

export const logInRequest = payload => ({ type: LOGIN_REQUEST, payload })
export const logInSuccess = payload => ({ type: LOGIN_SUCCESS, payload })
export const signUpRequest = payload => ({ type: SIGNUP_REQUEST, payload })
export const signUpSuccess = () => ({ type: SIGNUP_SUCCESS })
export const resetNewUser = () => ({ type: RESET_NEW_USER })

export const epics = {
  logIn: (action$, state$) =>
    action$.pipe(
      ofType(LOGIN_REQUEST),
      switchMap(({ payload }) => {
        return from(
          axios.post(Services.baseUrl + Services.login, payload, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
        ).pipe(
          map(response => logInSuccess(response)),
          catchError(error => of(console.error(error)))
        )
      })
    ),
  signUp: (action$, state$) =>
    action$.pipe(
      ofType(SIGNUP_REQUEST),
      switchMap(({ payload }) => {
        return from(
          axios.post(Services.baseUrl + Services.signup, payload, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
        ).pipe(
          map(response => signUpSuccess(response)),
          catchError(error => of(console.error(error)))
        )
      })
    )
}
export const initialState = {
  newUser: false
}

// REDUCERS
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      sessionStorage.setItem('user', JSON.stringify(action.payload.data))
      return {
        ...state,
        user: action.payload.data
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        newUser: true
      }
    case RESET_NEW_USER:
      return {
        ...state,
        newUser: false
      }
    default:
      return state
  }
}
export const getUser = state => state.login.user
export const getNewUser = state => state.login.newUser
