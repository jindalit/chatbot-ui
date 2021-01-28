import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getEmployeeRisk, getHighFlightRisk, getEmployeeCovered, getBusinessUnit, getCriticalEmployee, initLoadData } from '../../state/attrition'
const mapStateToProps = createStructuredSelector({
    getEmployeeRisk: getEmployeeRisk,
    getBusinessUnit: getBusinessUnit,
    gradeWise: getHighFlightRisk,
    getEmployeeCovered: getEmployeeCovered,
    getCriticalEmployee: getCriticalEmployee
})
const mapDispatchToProps = dispatch => ({
    initLoadData: () => dispatch(initLoadData())
})

export default connect(mapStateToProps, mapDispatchToProps)
