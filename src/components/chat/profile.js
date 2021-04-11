import React from 'react'


export default (props) => {
    const user = JSON.parse(sessionStorage.getItem('user'))
    return (
        <React.Fragment>
            <div className="d-flex align-items-center">
                <div className="chat-profile mr-3">
                    <img src={process.env.PUBLIC_URL + "/images/user.jpg"} alt="chat-user" className="avatar-60 " />
                </div>
                <div className="chat-caption">
                    <h5 className="mb-0">{user.firstName + ' ' + user.lastName}</h5>
                    <p className="m-0">Team Leader</p>
                </div>
                <button type="submit" className="close-btn-res p-3"><i className="ri-close-fill"></i></button>
            </div>
            <div id="user-detail-popup" class="scroller">
                <div class="user-profile">
                    <button type="submit" class="close-popup p-3"><i class="ri-close-fill"></i></button>
                    <div class="user text-center mb-4">
                        <a class="avatar m-0">
                            <img src={process.env.PUBLIC_URL + "/images/user.jpg"} class="avatar-100" alt="avatar" />
                        </a>
                        <div class="user-name mt-4">
                            <h4>{user.firstName + ' ' + user.lastName}</h4>
                        </div>
                        <div class="user-desc">
                            <p>Team Leader</p>
                        </div>
                    </div>
                    <hr />
                    <div class="user-detail text-left mt-4 pl-4 pr-4">
                        <h5 class="mt-4 mb-4">About</h5>
                        <p>It is long established fact that a reader will be distracted bt the reddable.</p>
                        <h5 class="mt-3 mb-3">Status</h5>
                        <ul class="user-status p-0">
                            <li class="mb-1"><i
                                class="ri-checkbox-blank-circle-fill text-success pr-1"></i><span>Online</span>
                            </li>
                            <li class="mb-1"><i
                                class="ri-checkbox-blank-circle-fill text-warning pr-1"></i><span>Away</span>
                            </li>
                            <li class="mb-1"><i
                                class="ri-checkbox-blank-circle-fill text-danger pr-1"></i><span>Do Not
                                                   Disturb</span></li>
                            <li class="mb-1"><i
                                class="ri-checkbox-blank-circle-fill text-light pr-1"></i><span>Offline</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>)
}