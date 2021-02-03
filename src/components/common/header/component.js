import React, { useCallback } from 'react'
import { NavLink, Link } from 'react-router-dom'


const Header = (props) => {
    const user = props.user ? props.user : JSON.parse(sessionStorage.getItem('user'))
    const signOut = useCallback(event => {
        sessionStorage.clear();
        window.location.reload(false)
    }, [])
    return (<div className="iq-top-navbar">
        <div className="iq-navbar-custom">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
                <div className="iq-navbar-logo d-flex align-items-center justify-content-between">
                    <i className="ri-menu-line wrapper-menu"></i>
                    <Link to="/" className="header-logo">
                        <img src={process.env.PUBLIC_URL + "images/logo.jpg"} className="img-fluid rounded-normal light-logo" alt="logo" />

                    </Link>
                </div>
                <div className="iq-search-bar device-search">
                    <form action="#" className="searchbox">
                        <a className="search-link" href="#"><i className="ri-search-line"></i></a>
                        <input type="text" className="text search-input" placeholder="Search here..." style={{ width: "54%" }} />
                        <div className="form-group navlink" style={{ position: 'absolute', display: 'inline-block', width: '509px', marginTop: '2px', marginLeft: '7px' }}>
                            <NavLink to="/" exact activeClassName="active"><button type="submit" className="btn btn-default btn-submit">Engagement</button></NavLink>
                            <NavLink to="/attrition" activeClassName="active"><button type="submit" className="btn btn-default btn-submit">Attrition</button></NavLink>
                            <NavLink to="/scorecard" activeClassName="active"><button type="submit" className="btn btn-default btn-submit">Employee Experience Scorecard</button></NavLink>
                        </div>
                    </form>
                </div>
                <div className="d-flex align-items-center">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto navbar-list align-items-center">
                            <li className="nav-item nav-icon search-content">
                                <a href="#" className="search-toggle rounded" id="dropdownSearch" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ri-search-line"></i>
                                </a>
                                <div className="iq-search-bar iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownSearch">
                                    <form action="#" className="searchbox p-2">
                                        <div className="form-group mb-0 position-relative">
                                            <input type="text" className="text search-input font-size-12" placeholder="type here to search..." />
                                            <a href="#" className="search-link"><i className="las la-search"></i></a>
                                        </div>
                                    </form>
                                </div>
                            </li>


                            <li className="nav-item nav-icon dropdown">
                                <a href="#" className="search-toggle dropdown-toggle" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="help">
                                    <i className="ri-questionnaire-line  bg-yellow p-2 rounded-small"></i>
                                    <span className="bg-primary"></span>
                                </a>
                            </li>
                            <li className="nav-item nav-icon dropdown">
                                <a href="#" className="search-toggle dropdown-toggle" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ri-mail-line  bg-orange p-2 rounded-small"></i>
                                    <span className="bg-primary"></span>
                                </a>

                            </li>
                            <li className="nav-item nav-icon dropdown">
                                <a href="#" className="search-toggle dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                    <i className="ri-notification-line bg-info p-2 rounded-small"></i>
                                    <span className="bg-primary "></span>
                                </a>

                            </li>
                            <li className="nav-item iq-full-screen"><a href="#" className="" id="btnFullscreen"><i className="ri-fullscreen-line"></i></a></li>
                            <li className="caption-content">
                                <a href="#" className="iq-user-toggle">
                                    <img src={process.env.PUBLIC_URL + "/images/user.jpg"} className="img-fluid rounded" alt="user" />
                                </a>
                                <div className="iq-user-dropdown">
                                    <div className="card">
                                        <div className="card-header d-flex justify-content-between align-items-center mb-0">
                                            <div className="header-title">
                                                <h4 className="card-title mb-0">Profile</h4>
                                            </div>
                                            <div className="close-data text-right badge badge-primary cursor-pointer"><i className="ri-close-fill"></i></div>
                                        </div>
                                        <div className="data-scrollbar" data-scroll="2">
                                            <div className="card-body">
                                                <div className="profile-header">
                                                    <div className="cover-container ">
                                                        <div className="media align-items-center mb-4">
                                                            <img src={process.env.PUBLIC_URL + "/images/user.jpg"} alt="profile-bg" className="rounded img-fluid avatar-80" />
                                                            <div className="media-body profile-detail ml-3">
                                                                <h3>{user.firstName + ' ' + user.lastName}</h3>
                                                                <div className="d-flex flex-wrap">
                                                                    <p className="mb-1">CEO</p><a href='#' onClick={signOut} className=" ml-3">Sign Out</a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6  col-6 pr-0">
                                                            <div className="profile-details text-center">
                                                                <a href="#" className="iq-sub-card bg-primary-light rounded-small p-2">
                                                                    <div className="rounded iq-card-icon-small">
                                                                        <i className="ri-file-user-line"></i>
                                                                    </div>
                                                                    <h6 className="mb-0 ">My Profile</h6>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6  col-md-6 col-6">
                                                            <div className="profile-details text-center">
                                                                <a href="#" className="iq-sub-card bg-danger-light rounded-small p-2">
                                                                    <div className="rounded iq-card-icon-small">
                                                                        <i className="ri-profile-line"></i>
                                                                    </div>
                                                                    <h6 className="mb-0 ">Edit Profile</h6>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6  col-6 pr-0">
                                                            <div className="profile-details text-center">
                                                                <a href="#" className="iq-sub-card bg-success-light rounded-small p-2">
                                                                    <div className="rounded iq-card-icon-small">
                                                                        <i className="ri-account-box-line"></i>
                                                                    </div>
                                                                    <h6 className="mb-0 ">Account</h6>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6  col-6">
                                                            <div className="profile-details text-center">
                                                                <a href="#" className="iq-sub-card bg-info-light rounded-small p-2">
                                                                    <div className="rounded iq-card-icon-small">
                                                                        <i className="ri-lock-line"></i>
                                                                    </div>
                                                                    <h6 className="mb-0 ">Settings</h6>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="personal-details">
                                                        <h5 className="card-title mb-3 mt-3">Personal Details</h5>
                                                        <div className="row align-items-center mb-2">
                                                            <div className="col-sm-6">
                                                                <h6>Birthday</h6>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <p className="mb-0">3rd March</p>
                                                            </div>
                                                        </div>
                                                        <div className="row align-items-center mb-2">
                                                            <div className="col-sm-6">
                                                                <h6>Address</h6>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <p className="mb-0">Noida</p>
                                                            </div>
                                                        </div>
                                                        <div className="row align-items-center mb-2">
                                                            <div className="col-sm-6">
                                                                <h6>Phone</h6>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <p className="mb-0">(010)987 543 201</p>
                                                            </div>
                                                        </div>
                                                        <div className="row align-items-center mb-2">
                                                            <div className="col-sm-6">
                                                                <h6>Email</h6>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <p className="mb-0"><a href="#" className="__cf_email__" data-cfemail="793b180b0b00391c01181409151c571a1614">Mayank@logikoof.com</a></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div >)
}
export default Header