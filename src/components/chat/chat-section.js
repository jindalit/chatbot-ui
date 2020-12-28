import React, { useState } from 'react'
import { map } from 'lodash'

export default (props) => {
    const [message, setMessage] = useState('')
    const chats = sessionStorage.getItem('chats') ? JSON.parse(sessionStorage.getItem('chats')) : []
    const handleSend = (event) => {
        event.currentTarget.previousElementSibling.focus()
        const msgTxt = message
        setMessage('')
        event.currentTarget.previousElementSibling.value = ''
        props.sendMessage(msgTxt)
    }
    const handleChange = (event) => {
        if (event.keyCode === 13) {
            const msgTxt = event.currentTarget.value
            setMessage('')
            event.currentTarget.value = ''
            event.currentTarget.focus()
            props.sendMessage(msgTxt)
            return
        }
        setMessage(event.currentTarget.value)
    }
    return (<React.Fragment>
        <div className="" role="tabpanel">
            <div class="chat-head">
                <header
                    class="d-flex justify-content-between align-items-center bg-white p-3">
                    <div class="d-flex align-items-center">
                        <div class="sidebar-toggle">
                            <i class="ri-menu-3-line"></i>
                        </div>
                        <div class="avatar chat-user-profile m-0 mr-3">
                            <img src={process.env.PUBLIC_URL + "images/chat-bot.png"} alt="avatar" class="avatar-50 " />
                            <span class="avatar-status"><i
                                class="ri-checkbox-blank-circle-fill text-success"></i></span>
                        </div>
                        <h5 class="mb-0">CHAT BOT</h5>
                    </div>
                </header>
            </div>
            <div className='chat-content scroller'>
                {chats.map(chat => (<React.Fragment>
                    <div class="chat">
                        <div class="chat-user">
                            <a class="avatar m-0">
                                <img src={process.env.PUBLIC_URL + "images/user.jpg"} alt="avatar" class="avatar-35 " />
                            </a>
                        </div>
                        <div class="chat-detail">
                            <div class="chat-message">
                                <p>{chat.question}</p>
                            </div>
                        </div>
                    </div>
                    <div class="chat chat-left">
                        <div class="chat-user">
                            <a class="avatar m-0">
                                <img src={process.env.PUBLIC_URL + "images/chat-bot.png"} alt="avatar" class="avatar-35 " />
                            </a>
                        </div>
                        <div class="chat-detail">
                            <div class="chat-message">
                                <p>{chat.answer}</p>
                            </div>
                        </div>
                    </div></React.Fragment>
                ))
                }

            </div>

            <div className="chat-footer p-3 bg-white d-flex align-items-center">
                <input type="text" className="form-control mr-3 msg-textbox" placeholder="Type your message" onKeyUp={handleChange} />
                <button type="submit" className="btn btn-primary d-flex align-items-center p-2" onClick={handleSend}><i
                    className="fa fa-paper-plane mr-0" aria-hidden="true"></i><span
                        className="d-none d-lg-block ml-1">Send</span></button>
            </div>
        </div>
    </React.Fragment >)
}