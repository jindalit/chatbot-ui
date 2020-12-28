import React from 'react'


export default (props) => {
    const clickSection = (sectionName) => {
        props.openSection(sectionName)
    }
    return (<React.Fragment>
        <h4 class="text-center mt-5 mb-5 text-secondary">Improve your AMY</h4>
        <ul class="iq-chat-ui nav flex-column nav-pills">
            <li>
                <a data-toggle="pill" href="#" onClick={() => clickSection('chat')}>
                    <div class="d-flex align-items-center section-card">
                        <div class="rounded iq-card-icon bg-primary">
                            <i class="las la-laugh pl-2 pr-2" style={{ fontSize: '40px', marginTop: '9px' }}></i>
                        </div>
                        <div class="chat-sidebar-name ml-3">
                            <h5 class="mb-0">Have a Policy query?</h5>
                            <h5 className='text-secondary'>Chat with AMY now !!!!</h5>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a data-toggle="pill" href="#" onClick={() => clickSection('attendance')}>
                    <div class="d-flex align-items-center section-card">
                        <div class="rounded iq-card-icon">
                            <i class="ri-notification-line bg-danger p-2 rounded-small" style={{ fontSize: '40px', marginTop: '9px' }}></i>
                        </div>
                        <div class="chat-sidebar-name ml-3">
                            <h5 class="mb-0">Apply for Attendance</h5>
                            <h5 className='text-secondary'>Apply in one click!!!</h5>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a data-toggle="pill" href="#" onClick={() => clickSection('question')}>
                    <div class="d-flex align-items-center section-card">
                        <div class="rounded iq-card-icon">
                            <i class="ri-questionnaire-line  bg-yellow p-2 rounded-small" style={{ fontSize: '40px', marginTop: '9px' }}></i>
                        </div>
                        <div class="chat-sidebar-name ml-3">
                            <h5 class="mb-0">My Question for today</h5>
                            <h5 className='text-secondary'>Submit you answer here</h5>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </React.Fragment>)
}