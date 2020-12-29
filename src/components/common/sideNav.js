import React from 'react'


const SideNav = () => {
    return (
        <div className="iq-sidebar  sidebar-default ">
            <div className="iq-sidebar-logo d-flex align-items-center justify-content-between">
                <a href="dashboard.html" className="header-logo">
                    <img src={process.env.PUBLIC_URL + "images/logo.png"} className="img-fluid rounded-normal light-logo" alt="logo" />
                    <img src={process.env.PUBLIC_URL + "images/logo-white.png"} className="img-fluid rounded-normal darkmode-logo" alt="logo" />
                </a>
                <div className="iq-menu-bt-sidebar">
                    <i className="las la-bars wrapper-menu"></i>
                </div>
            </div>
            <div className="data-scrollbar" data-scroll="1">
                <nav className="iq-sidebar-menu">
                    <ul id="iq-sidebar-toggle" className="iq-menu">
                        <li className="">
                            <a href="dashboard.html" className="collapsed">
                                <i className="lab la-buffer"></i><span>Dashboard</span>
                            </a>

                        </li>

                        <li className="active">
                            <a href="chat.html" className="collapsed">
                                <i className="las la-comments"></i><span>Chat</span>
                            </a>

                        </li>

                        <li className="">
                            <a href="#" className="collapsed">
                                <i className="las la-user-alt"></i><span>User</span>
                            </a>

                        </li>

                        <li className="">
                            <a href="#" className="collapsed">
                                <i className="las la-bell"></i><span>Notifications</span>
                            </a>

                        </li>

                        <li className="">
                            <a href="#" className="collapsed">
                                <i className="las la-question-circle"></i><span>FAQ's</span>
                            </a>

                        </li>
                    </ul>

                </nav>
                <div className="p-3"></div>
            </div>
        </div>
    )
}
export default SideNav