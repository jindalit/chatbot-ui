import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getEmployeeRisk, getHighFlightRisk, highFlightRisk, employeeRisk, businessUnit, getBusinessUnit } from '../../state/attrition'
const mapStateToProps = createStructuredSelector({
    getEmployeeRisk: getEmployeeRisk,
    getBusinessUnit: getBusinessUnit,
    getHighFlightRisk: getHighFlightRisk
})
const mapDispatchToProps = dispatch => ({
    employeeRisk: () => dispatch(employeeRisk()),
    highFlightRisk: () => dispatch(highFlightRisk()),
    businessUnit: () => dispatch(businessUnit())
})

export default connect(mapStateToProps, mapDispatchToProps)
