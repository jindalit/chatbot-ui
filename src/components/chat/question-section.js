import React, { useEffect, useState } from 'react'
import Rating from 'react-rating'
import { submitQuestion } from '../../state/chat'
export default (props) => {
    const { questionList, getSurveyName } = props
    const [steps, setSteps] = useState(5)
    useEffect(() => {
        if (getSurveyName === 'Engagement') {
            setSteps(6)
        } else {
            setSteps(5)
        }
    }, [getSurveyName])
    const questions = []

    const rateQuestion = (rating, question) => {
        let isExist = false
        let questionIndex = 0
        questions.map((item, index) => {
            if (item.id === question.id) {
                questionIndex = index
                isExist = true
            }
        })
        if (!isExist || questions.length === 0) {
            return questions.push({
                ...question, rating
            })
        } else {
            return questions[questionIndex].rating = rating
        }
    }
    const submitQuestions = () => {
        props.submitQuiz(questions)
    }
    return (<div className='ml-2'>
        {/* <h3 className='text-center text-primary mt-2 mb-3'>Share your feedback</h3> */}
        <div className=' feedback-content scroller'>
            {questionList &&
                questionList.map(item => (<div>
                    <h5 className=' text-secondry'>{item.question}</h5>
                    <Rating
                        stop={steps}
                        onClick={(rate) => rateQuestion(rate, item)}
                        emptySymbol={['icon-emonji icon-angry', 'icon-emonji icon-bad', 'icon-emonji icon-ok', 'icon-emonji icon-happy', 'icon-emonji icon-great', 'icon-emonji icon-strongly-agree']}
                        fullSymbol={['icon-emonji icon-angry-full', 'icon-emonji icon-bad-full', 'icon-emonji icon-ok-full', 'icon-emonji icon-happy-full', 'icon-emonji icon-great-full', 'icon-emonji icon-strongly-agree-full']}
                    />
                    {getSurveyName === 'Engagement' ? <textarea rows={1} style={{ width: '100%' }} /> : ''}
                </div>))
            }</div>
        <div className='text-center'>
            <button className='btn btn-primary pr-5 pl-5 pt-2 pb-2 ' onClick={submitQuestions}>Submit</button>
        </div>
    </div>)
}