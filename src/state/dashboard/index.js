import { switchMap, catchError, map } from 'rxjs/operators'
import { of, from } from 'rxjs'
import { ofType } from 'redux-observable'
import axios from 'axios'
import Services from '../../constant'

// Action-type 
const INIT_LOAD = 'INIT_LOAD'
const PULSE_SCORE = 'PULSE_SCORE'
const PULSE_SCORE_SUCCESS = 'PULSE_SCORE_SUCCESS'
const COMPANY_MOOD = 'COMPANY_MOOD'
const COMPANY_MOOD_SUCCESS = 'COMPANY_MOOD_SUCCESS'
const ASSACIATES_RESPONSE = 'ASSACIATES_RESPONSE'
const ASSACIATES_RESPONSE_SUCCESS = 'ASSACIATES_RESPONSE_SUCCESS'
const FLIGHT_RISK_ANALYSIS = 'FLIGHT_RISK_ANALYSIS'
const FLIGHT_RISK_ANALYSIS_SUCCESS = 'FLIGHT_RISK_ANALYSIS_SUCCESS'
const UNIT_PULSE = 'UNIT_PULSE'
const UNIT_PULSE_SUCCESS = 'UNIT_PULSE_SUCCESS'
const GENDER_WISE = 'GENDER_WISE'
const GENDER_WISE_SUCCESS = 'GENDER_WISE_SUCCESS'

//Actions

export const initLoadData = () => ({ type: INIT_LOAD })
export const pulseScore = () => ({ type: PULSE_SCORE })
export const pulseScoreSucess = payload => ({ payload, type: PULSE_SCORE_SUCCESS })
export const companyMood = () => ({ type: COMPANY_MOOD })
export const companyMoodSucess = payload => ({ payload, type: COMPANY_MOOD_SUCCESS })
export const assaciatesResponse = () => ({ type: ASSACIATES_RESPONSE })
export const assaciatesResponseSucess = payload => ({ payload, type: ASSACIATES_RESPONSE_SUCCESS })
export const flightRisk = () => ({ type: FLIGHT_RISK_ANALYSIS })
export const flightRiskSucess = payload => ({ payload, type: FLIGHT_RISK_ANALYSIS_SUCCESS })
export const unitPulse = (payload) => ({ payload, type: UNIT_PULSE })
export const unitPulseSucess = payload => ({ payload, type: UNIT_PULSE_SUCCESS })
export const genderWise = (payload) => ({ payload, type: GENDER_WISE })
export const genderWiseSucess = payload => ({ payload, type: GENDER_WISE_SUCCESS })

export const epics = {
    assaciatesResponse: (action$, state$) => action$.pipe(
        ofType(ASSACIATES_RESPONSE),
        switchMap(() => {
            return from(
                axios.get(Services.baseUrl + Services.associateResponseView, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            ).pipe(
                map(({ data }) => assaciatesResponseSucess(data))
                ,
                catchError(error => of(console.error(error)))
            )
        })
    ),
    genderWise: (action$, state$) => action$.pipe(
        ofType(GENDER_WISE),
        switchMap(() => {
            return from(
                axios.get(Services.baseUrl + Services.genderWise, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            ).pipe(
                map(({ data }) => genderWiseSucess(data))
                ,
                catchError(error => of(console.error(error)))
            )
        })
    ),
    companyMood: (action$, state$) => action$.pipe(
        ofType(COMPANY_MOOD),
        switchMap(() => {
            return from(
                axios.get(Services.baseUrl + Services.companyMood, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            ).pipe(
                map(({ data }) => companyMoodSucess(data))
                ,
                catchError(error => of(console.error(error)))
            )
        })
    ), flightRisk: (action$, state$) => action$.pipe(
        ofType(FLIGHT_RISK_ANALYSIS),
        switchMap(() => {
            return from(
                axios.get(Services.baseUrl + Services.flightRiskAnalysis, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            ).pipe(
                map(({ data }) => flightRiskSucess(data))
                ,
                catchError(error => of(console.error(error)))
            )
        })
    ),
    initLoadData: (action$, state$) => action$.pipe(
        ofType(INIT_LOAD),
        switchMap(() => {
            return [assaciatesResponse(), flightRisk(), pulseScore(), companyMood(), genderWise(), unitPulse({ type: 'unitPulseView' })]
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
    ),
    unitPulse: (action$, state$) => action$.pipe(
        ofType(UNIT_PULSE),
        switchMap(({ payload }) => {
            return from(
                axios.post(Services.baseUrl + Services.unitPulseView, payload, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            ).pipe(
                map(({ data }) => {
                    return unitPulseSucess(data)
                }),
                catchError(error => of(console.error(error)))
            )
        })
    )
}
export const initialState = {
    assaciatesResponse: [],
    pulseScore: [],
    mood: {},
    flightRisk: {},
    unitPulses: {},
    genderWise: {}
}

// REDUCERS
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ASSACIATES_RESPONSE_SUCCESS:
            return {
                ...state,
                assaciatesResponse: action.payload.associateResponseView.location
            }
        case FLIGHT_RISK_ANALYSIS_SUCCESS:
            return {
                ...state,
                flightRisk: action.payload.flightRiskAnalysis
            }
        case GENDER_WISE_SUCCESS:
            return {
                ...state,
                genderWise: action.payload.GenderWiseView
            }
        case PULSE_SCORE_SUCCESS:
            return {
                ...state,
                pulseScore: action.payload
            }
        case UNIT_PULSE_SUCCESS:
            if (action.payload.unitPulseView) {
                return {
                    ...state,
                    unitPulses: action.payload.unitPulseView
                }
            }
            else {
                return {
                    ...state,
                    employeeExperienceView: action.payload.employeeExperienceView
                }
            }
        case COMPANY_MOOD_SUCCESS:
            return {
                ...state,
                mood: action.payload.overallCompanyMood
            }
        default:
            return state
    }
}
export const getPulseScore = state => state.home.pulseScore
export const getCompanyMood = state => state.home.mood
export const getGenderWise = state => state.home.genderWise
export const getAssaciatesResponse = state => state.home.assaciatesResponse
export const getFlightRisk = state => state.home.flightRisk
export const getUnitPulse = state => state.home.unitPulses
export const getEmployeeExperienceView = state => state.home.employeeExperienceView