import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { initLoadData, getPulseScore } from '../../state/dashboard'

export const mapStateToProps = createStructuredSelector({
    pulseScore: getPulseScore
})

const mapDispatchToProps = dispatch => ({
    initLoadData: () => dispatch(initLoadData())
})

export default connect(mapStateToProps, mapDispatchToProps)