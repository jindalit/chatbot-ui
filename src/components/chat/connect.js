import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { logInRequest } from '../../state/login'

const mapStateToProps = createStructuredSelector({})
const mapDispatchToProps = dispatch => ({
    logInRequest: payload => dispatch(logInRequest(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)
