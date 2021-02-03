import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { logInRequest, getUser } from '../../state/login'

const mapStateToProps = createStructuredSelector({
    user: getUser
})
const mapDispatchToProps = dispatch => ({
    logInRequest: payload => dispatch(logInRequest(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)
