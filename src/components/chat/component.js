import React, { useState, useEffect } from 'react'
import SideNav from '../common/sideNav'
import Header from '../common/header'
import Profile from './profile'
import Sections from './sections'
import ChatSection from './chat-section'
import AttendanceSection from './attendance-section'
import QuestionSection from './question-section'

const Chat = (props) => {
    const { chats, questionList, suggestionList, getSurveyName } = props
    const [sectionName, setSectionName] = useState('chat')
    useEffect(() => {
        props.fetchQuestion()
    }, [])
    useEffect(() => {
        if (props.getFeedback) {
            setSectionName('chat')
        }
    }, [props.getFeedback])
    const submitQuiz = questions => {
        props.submitQuestion(questions)
    }
    const openSection = sectionName => {
        setSectionName(sectionName)
    }
    const sendMessage = message => {
        props.messageDispatch(message)
    }
    const searchQuestion = message => {
        props.searchDispatch(message)
    }
    return (<div className="wrapper" >
        <SideNav nav='chat' />
        <Header />
        <div className="content-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body chat-page p-0">
                                <div className="chat-data-block">
                                    <div className="row">
                                        <div className="col-lg-4 chat-data-left scroller chat-sidebar-channel">
                                            <div class="chat-search pt-3 pl-3 sections">
                                                <Profile />
                                                <Sections openSection={openSection} />
                                            </div>
                                        </div>
                                        <div className='col-lg-8 chat-data p-0 chat-data-right'>
                                            <div class="tab-content h-100">
                                                {
                                                    sectionName === 'chat' ? <ChatSection chats={chats} sendMessage={sendMessage} questions={suggestionList} searchQuestion={searchQuestion} />
                                                        : sectionName === 'question' ? <QuestionSection getSurveyName={getSurveyName} questionList={questionList} submitQuiz={submitQuiz} />
                                                            : <AttendanceSection />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Chat