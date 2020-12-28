import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getUser } from '../../../state/login'

const mapStateToProps = createStructuredSelector({
    user: getUser
})

export default connect(mapStateToProps)