import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { signUpRequest, getNewUser, resetNewUser } from '../../state/login'

export const mapStateToProps = createStructuredSelector({
    getNewUser: getNewUser
})
const mapDispatchToProps = dispatch => ({
    signUpRequest: payload => dispatch(signUpRequest(payload)),
    resetNewUser: () => dispatch(resetNewUser())
})


export default connect(mapStateToProps, mapDispatchToProps)