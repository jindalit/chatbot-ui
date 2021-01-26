import { get } from 'lodash'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { initLoadData, unitPulse, getGenderWise, getPulseScore, getCompanyMood, getAssaciatesResponse, getFlightRisk, getUnitPulse, getEmployeeExperienceView } from '../../state/dashboard'

export const mapStateToProps = createStructuredSelector({
    pulseScore: getPulseScore,
    companyMood: getCompanyMood,
    assaciatesResponse: getAssaciatesResponse,
    flightRisk: getFlightRisk,
    getUnitPulse: getUnitPulse,
    getGenderWise: getGenderWise,
    getEmployeeExperienceView: getEmployeeExperienceView
})

const mapDispatchToProps = dispatch => ({
    initLoadData: () => dispatch(initLoadData()),
    unitPulse: payload => dispatch(unitPulse(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)