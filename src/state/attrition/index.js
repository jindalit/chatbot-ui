import { switchMap, catchError, map } from 'rxjs/operators'
import { of, from } from 'rxjs'
import { ofType } from 'redux-observable'
import axios from 'axios'
import Services from '../../constant'

// Action-type 
const EMPLOYEE_RISK = 'EMPLOYEE_RISK'
const EMPLOYEE_RISK_SUCCESS = 'EMPLOYEE_RISK_SUCCESS'
const HIGH_FLIGHT_RISK = 'HIGH_FLIGHT_RISK'
const HIGH_FLIGHT_RISK_SUCCESS = 'HIGH_FLIGHT_RISK_SUCCESS'
const BUSINESS_UNIT = 'BUSINESS_UNIT'
const BUSINESS_UNIT_SUCCESS = 'BUSINESS_UNIT_SUCCESS'


//Actions

export const employeeRisk = () => ({ type: EMPLOYEE_RISK })
export const employeeRiskSuccess = payload => ({ payload, type: EMPLOYEE_RISK_SUCCESS })
export const highFlightRisk = () => ({ type: HIGH_FLIGHT_RISK })
export const highFlightRiskSuccess = payload => ({ payload, type: HIGH_FLIGHT_RISK_SUCCESS })
export const businessUnit = () => ({ type: BUSINESS_UNIT })
export const businessUnitSuccess = payload => ({ payload, type: BUSINESS_UNIT_SUCCESS })

export const epics = {
    businessUnit: (action$, state$) => action$.pipe(
        ofType(BUSINESS_UNIT),
        switchMap(() => {
            return from(
                axios.get(Services.baseUrl + Services.businessUnitWiseHighFlightRisk, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            ).pipe(
                map(({ data }) => businessUnitSuccess(data))
                ,
                catchError(error => of(console.error(error)))
            )
        })
    ),
    employeeRisk: (action$, state$) => action$.pipe(
        ofType(EMPLOYEE_RISK),
        switchMap(() => {
            return from(
                axios.get(Services.baseUrl + Services.enterpriseEmployeeRisk, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            ).pipe(
                map(({ data }) => employeeRiskSuccess(data))
                ,
                catchError(error => of(console.error(error)))
            )
        })
    ),
    highFlightRisk: (action$, state$) => action$.pipe(
        ofType(HIGH_FLIGHT_RISK),
        switchMap(() => {
            return from(
                axios.get(Services.baseUrl + Services.gradeWiseHighFlightRisk, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            ).pipe(
                map(({ data }) => highFlightRiskSuccess(data))
                ,
                catchError(error => of(console.error(error)))
            )
        })

    )
}
export const initialState = {
    employeeRisk: {},
    highFlightRisk: {},
    businessUnit: {}
}

// REDUCERS
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case BUSINESS_UNIT_SUCCESS:
            return {
                ...state,
                businessUnit: action.payload.BusinessUnitWiseHighFlightRisk
            }
        case EMPLOYEE_RISK_SUCCESS:
            return {
                ...state,
                employeeRisk: action.payload.enterpriseEmployeeRisk
            }
        case HIGH_FLIGHT_RISK_SUCCESS:
            return {
                ...state,
                highFlightRisk: action.payload.gradeWiseHighFlightRisk
            }

        default:
            return state
    }
}
export const getBusinessUnit = state => state.attrition.businessUnit
export const getEmployeeRisk = state => state.attrition.employeeRisk
export const getHighFlightRisk = state => state.attrition.highFlightRisk
