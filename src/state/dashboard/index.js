import { switchMap, catchError, map } from 'rxjs/operators'
import { of, from } from 'rxjs'
import { ofType } from 'redux-observable'
import axios from 'axios'
import Services from '../../constant'

// Action-type 
export const INIT_LOAD = 'INIT_LOAD'
export const PULSE_SCORE = 'PULSE_SCORE'
export const PULSE_SCORE_SUCCESS = 'PULSE_SCORE_SUCCESS'

//Actions

export const initLoadData = () => ({ type: INIT_LOAD })
export const pulseScore = () => ({ type: PULSE_SCORE })
export const pulseScoreSucess = payload => ({ payload, type: PULSE_SCORE_SUCCESS })

export const epics = {
    initLoadData: (action$, state$) => action$.pipe(
        ofType(INIT_LOAD),
        switchMap(() => {
            return of(pulseScore())
        })
    ),
    pulseScore: (action$, state$) => action$.pipe(
        ofType(PULSE_SCORE),
        switchMap(() => {
            return from(
                axios.get(Services.baseUrl + Services.pulseScore, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            ).pipe(
                map(({ data }) => pulseScoreSucess(data))
                ,
                catchError(error => of(console.error(error)))
            )
        })
    )
}
export const initialState = {
    pulseScore: []
}

// REDUCERS
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case PULSE_SCORE_SUCCESS:
            return {
                ...state,
                pulseScore: action.payload
            }
        default:
            return state
    }
}
export const getPulseScore = state => state.home.pulseScore