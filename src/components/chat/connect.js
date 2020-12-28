import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getChat, messageDispatch, getQuestion, fetchQuestion, submitQuestion, getFeedback } from '../../state/chat'

const mapStateToProps = createStructuredSelector({
    chats: getChat,
    questionList: getQuestion,
    getFeedback: getFeedback
})
const mapDispatchToProps = dispatch => ({
    fetchQuestion: () => dispatch(fetchQuestion()),
    messageDispatch: payload => dispatch(messageDispatch(payload)),
    submitQuestion: payload => dispatch(submitQuestion(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)
