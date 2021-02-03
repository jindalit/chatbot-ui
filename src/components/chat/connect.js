import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getChat, messageDispatch, getSurveyName, getQuestion, fetchQuestion, submitQuestion, getFeedback, getSuggestQuestion, searchDispatch } from '../../state/chat'

const mapStateToProps = createStructuredSelector({
    chats: getChat,
    questionList: getQuestion,
    getFeedback: getFeedback,
    getSurveyName: getSurveyName,
    suggestionList: getSuggestQuestion
})
const mapDispatchToProps = dispatch => ({
    fetchQuestion: () => dispatch(fetchQuestion()),
    messageDispatch: payload => dispatch(messageDispatch(payload)),
    submitQuestion: payload => dispatch(submitQuestion(payload)),
    searchDispatch: payload => dispatch(searchDispatch(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)
