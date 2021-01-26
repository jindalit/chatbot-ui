import React from 'react'
import SideNav from '../common/sideNav'
import Header from '../common/header'
export default () => {
    return (<div className="wrapper" >
        <SideNav nav='chat' />
        <Header />
        <div className="content-page">
            <div className="container-fluid">
                <div className="d-flex justify-content-between px-3 py-0 m-1">
                    <h4>Employee Experience Score Card</h4>
                    <div className="row w-50">
                        <select className="col-4 form-control form-control-sm mb-3">
                            <option selected="">Department</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select className="col-4 form-control form-control-sm mb-3">
                            <option selected="">Location</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select className="col-4 form-control form-control-sm mb-3">
                            <option selected="">Today</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="container-fluid NavLinks-Attrition-Pages tab-content" id="myTabContent-2">

                <div className="row">
                    <div className="col-3">
                        <div className="card">
                            <div className="card-header text-center border-0">
                                <div className="header-title">
                                    <h4 className="card-title text-uppercase"><b>Pre-Joining</b></h4>
                                </div>
                            </div>
                            <div className="card-body d-flex h-100 text-center px-4 pt-3 pb-1">
                                <div className="lgf-progress" data-percentage="70">
                                    <span className="lgf-progress-left">
                                        <span className="lgf-progress-bar lgf-progress--success">
                                        </span>
                                    </span>
                                    <span className="lgf-progress-right">
                                        <span className="lgf-progress-bar lgf-progress--success">
                                        </span>
                                    </span>
                                    <div className="lgf-progress-value">
                                        <div className="lgf-progress-text">
                                            <h6>70</h6>
                                            <span>Employee</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="emp-card-text">

                                <div className="px-3">
                                    <div className="alert alert-success mb-2">
                                        <div className="pr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 41.773 41.773">
                                                <path id="bubble-speak" d="M38.724,25.012A1.632,1.632,0,1,0,35.7,26.235l1.921,4.754-5.708-2.516a1.631,1.631,0,0,0-1.3-.008A15.737,15.737,0,0,1,24.4,29.72c-8.736,0-14.6-6.84-14.6-13.228C9.8,9.2,16.351,3.263,24.4,3.263s14.6,5.934,14.6,13.228a13.283,13.283,0,0,1-.145,1.869,1.632,1.632,0,1,0,3.228.482,16.481,16.481,0,0,0,.181-2.351A15.771,15.771,0,0,0,36.985,4.78,18.543,18.543,0,0,0,24.4,0,18.543,18.543,0,0,0,11.821,4.78,15.86,15.86,0,0,0,6.6,15.087,13.191,13.191,0,0,0,.5,26.069,12.659,12.659,0,0,0,3,33.633l-2.384,5.9a1.632,1.632,0,0,0,2.171,2.1L9.66,38.6a15.53,15.53,0,0,0,5.442.969c.041,0,.081,0,.121-.006A15.446,15.446,0,0,0,22.9,37.487a14.047,14.047,0,0,0,4.937-4.807,18.8,18.8,0,0,0,3.39-.942L39.981,35.6a1.632,1.632,0,0,0,2.171-2.1ZM15.1,36.306c-.022,0-.044,0-.066,0a12.236,12.236,0,0,1-4.768-.975,1.632,1.632,0,0,0-1.3.008L5.149,37.027l1.233-3.049a1.632,1.632,0,0,0-.271-1.67,9.525,9.525,0,0,1-2.349-6.238,9.708,9.708,0,0,1,3.016-6.952A16.472,16.472,0,0,0,11.6,27.938a18.24,18.24,0,0,0,11.871,5.023A11.993,11.993,0,0,1,15.1,36.306ZM26.769,18.031a1.632,1.632,0,1,1,0,3.264H16.979a1.632,1.632,0,0,1,0-3.264Zm4.9-3.264H16.979a1.632,1.632,0,0,1,0-3.264H31.665a1.632,1.632,0,0,1,0,3.264Zm0,0" transform="translate(-0.498 0)" fill="#00571a" />
                                            </svg>
                                        </div>
                                        <div className="">
                                            I understand the role I am getting hired for.
                  </div>
                                    </div>
                                    <div className="alert alert-success">
                                        <div className="pr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 41.773 41.773">
                                                <path id="bubble-speak" d="M38.724,25.012A1.632,1.632,0,1,0,35.7,26.235l1.921,4.754-5.708-2.516a1.631,1.631,0,0,0-1.3-.008A15.737,15.737,0,0,1,24.4,29.72c-8.736,0-14.6-6.84-14.6-13.228C9.8,9.2,16.351,3.263,24.4,3.263s14.6,5.934,14.6,13.228a13.283,13.283,0,0,1-.145,1.869,1.632,1.632,0,1,0,3.228.482,16.481,16.481,0,0,0,.181-2.351A15.771,15.771,0,0,0,36.985,4.78,18.543,18.543,0,0,0,24.4,0,18.543,18.543,0,0,0,11.821,4.78,15.86,15.86,0,0,0,6.6,15.087,13.191,13.191,0,0,0,.5,26.069,12.659,12.659,0,0,0,3,33.633l-2.384,5.9a1.632,1.632,0,0,0,2.171,2.1L9.66,38.6a15.53,15.53,0,0,0,5.442.969c.041,0,.081,0,.121-.006A15.446,15.446,0,0,0,22.9,37.487a14.047,14.047,0,0,0,4.937-4.807,18.8,18.8,0,0,0,3.39-.942L39.981,35.6a1.632,1.632,0,0,0,2.171-2.1ZM15.1,36.306c-.022,0-.044,0-.066,0a12.236,12.236,0,0,1-4.768-.975,1.632,1.632,0,0,0-1.3.008L5.149,37.027l1.233-3.049a1.632,1.632,0,0,0-.271-1.67,9.525,9.525,0,0,1-2.349-6.238,9.708,9.708,0,0,1,3.016-6.952A16.472,16.472,0,0,0,11.6,27.938a18.24,18.24,0,0,0,11.871,5.023A11.993,11.993,0,0,1,15.1,36.306ZM26.769,18.031a1.632,1.632,0,1,1,0,3.264H16.979a1.632,1.632,0,0,1,0-3.264Zm4.9-3.264H16.979a1.632,1.632,0,0,1,0-3.264H31.665a1.632,1.632,0,0,1,0,3.264Zm0,0" transform="translate(-0.498 0)" fill="#00571a" />
                                            </svg>
                                        </div>
                                        <div className="">
                                            I am eagerly looking forward to join the company.
                  </div>
                                    </div>
                                </div>

                                <div className="emp-card-description pt-3">
                                    <ul className="px-3">
                                        <li className="d-flex align-items-center pb-3">
                                            <div className="profile-icon iq-icon-box rounded-small text-center">
                                                <svg id="goal" xmlns="http://www.w3.org/2000/svg" width="43.773" height="43.773" viewBox="0 0 43.773 43.773">
                                                    <path id="Path_1" data-name="Path 1" d="M180.687,175.092a4.759,4.759,0,1,0,3.739,3.739l-2.8,2.8a2.644,2.644,0,0,1-3.739-3.739Zm0,0" transform="translate(-157.872 -157.872)" fill="#5f4591" />
                                                    <path id="Path_2" data-name="Path 2" d="M41.814,12.84,39.055,15.6a3.853,3.853,0,0,1-.923.683A17.183,17.183,0,1,1,27.493,5.642a3.849,3.849,0,0,1,.681-.924l2.759-2.759A21.891,21.891,0,1,0,41.814,12.84Zm0,0" transform="translate(0 0)" fill="#5f4591" />
                                                    <path id="Path_3" data-name="Path 3" d="M108.187,89.312l-.27-3.2a16.893,16.893,0,1,0,9.758,9.759l-3.2-.27-2.35,2.349a10.966,10.966,0,1,1-6.287-6.287Zm0,0" transform="translate(-80.006 -80.006)" fill="#5f4591" />
                                                    <path id="Path_4" data-name="Path 4" d="M247.193,13.054l.257,3.04-6.191,6.191a.881.881,0,1,0,1.246,1.246L248.7,17.34l3.04.256c.025,0,.049,0,.074,0a.881.881,0,0,0,.623-.258l3.738-3.739a.881.881,0,0,0-.549-1.5l-2.707-.228-.228-2.706a.881.881,0,0,0-1.5-.549l-3.738,3.739A.881.881,0,0,0,247.193,13.054Zm0,0" transform="translate(-213.148 -7.869)" fill="#5f4591" />
                                                </svg>
                                            </div>
                                            <div className="emp-loader-text">
                                                <b>
                                                    Goal Setting - 70% of the employees have done the goal setting
                      </b>
                                                <div className="pt-2">
                                                    <a href="#">Click here to view</a>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="d-flex align-items-center">
                                            <div className="profile-icon iq-icon-box rounded-small text-center">
                                                <svg id="goal" xmlns="http://www.w3.org/2000/svg" width="43.773" height="43.773" viewBox="0 0 43.773 43.773">
                                                    <path id="Path_1" data-name="Path 1" d="M180.687,175.092a4.759,4.759,0,1,0,3.739,3.739l-2.8,2.8a2.644,2.644,0,0,1-3.739-3.739Zm0,0" transform="translate(-157.872 -157.872)" fill="#5f4591" />
                                                    <path id="Path_2" data-name="Path 2" d="M41.814,12.84,39.055,15.6a3.853,3.853,0,0,1-.923.683A17.183,17.183,0,1,1,27.493,5.642a3.849,3.849,0,0,1,.681-.924l2.759-2.759A21.891,21.891,0,1,0,41.814,12.84Zm0,0" transform="translate(0 0)" fill="#5f4591" />
                                                    <path id="Path_3" data-name="Path 3" d="M108.187,89.312l-.27-3.2a16.893,16.893,0,1,0,9.758,9.759l-3.2-.27-2.35,2.349a10.966,10.966,0,1,1-6.287-6.287Zm0,0" transform="translate(-80.006 -80.006)" fill="#5f4591" />
                                                    <path id="Path_4" data-name="Path 4" d="M247.193,13.054l.257,3.04-6.191,6.191a.881.881,0,1,0,1.246,1.246L248.7,17.34l3.04.256c.025,0,.049,0,.074,0a.881.881,0,0,0,.623-.258l3.738-3.739a.881.881,0,0,0-.549-1.5l-2.707-.228-.228-2.706a.881.881,0,0,0-1.5-.549l-3.738,3.739A.881.881,0,0,0,247.193,13.054Zm0,0" transform="translate(-213.148 -7.869)" fill="#5f4591" />
                                                </svg>
                                            </div>
                                            <div className="emp-loader-text">
                                                <b className="text-danger">
                                                    Goal Setting - 70% of the employees have done the goal setting
                      </b>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-3">
                        <div className="card">
                            <div className="card-header text-center border-0">
                                <div className="header-title">
                                    <h4 className="card-title text-uppercase"><b>Assimilation</b></h4>
                                </div>
                            </div>
                            <div className="card-body d-flex h-100 text-center px-4 pt-3 pb-1">
                                <div className="lgf-progress" data-percentage="70">
                                    <span className="lgf-progress-left">
                                        <span className="lgf-progress-bar lgf-progress--success">
                                        </span>
                                    </span>
                                    <span className="lgf-progress-right">
                                        <span className="lgf-progress-bar lgf-progress--success">
                                        </span>
                                    </span>
                                    <div className="lgf-progress-value">
                                        <div className="lgf-progress-text">
                                            <h6>85</h6>
                                            <span>Employee</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="emp-card-text">

                                <div className="px-3">
                                    <div className="alert alert-success mb-2">
                                        <div className="pr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 41.773 41.773">
                                                <path id="bubble-speak" d="M38.724,25.012A1.632,1.632,0,1,0,35.7,26.235l1.921,4.754-5.708-2.516a1.631,1.631,0,0,0-1.3-.008A15.737,15.737,0,0,1,24.4,29.72c-8.736,0-14.6-6.84-14.6-13.228C9.8,9.2,16.351,3.263,24.4,3.263s14.6,5.934,14.6,13.228a13.283,13.283,0,0,1-.145,1.869,1.632,1.632,0,1,0,3.228.482,16.481,16.481,0,0,0,.181-2.351A15.771,15.771,0,0,0,36.985,4.78,18.543,18.543,0,0,0,24.4,0,18.543,18.543,0,0,0,11.821,4.78,15.86,15.86,0,0,0,6.6,15.087,13.191,13.191,0,0,0,.5,26.069,12.659,12.659,0,0,0,3,33.633l-2.384,5.9a1.632,1.632,0,0,0,2.171,2.1L9.66,38.6a15.53,15.53,0,0,0,5.442.969c.041,0,.081,0,.121-.006A15.446,15.446,0,0,0,22.9,37.487a14.047,14.047,0,0,0,4.937-4.807,18.8,18.8,0,0,0,3.39-.942L39.981,35.6a1.632,1.632,0,0,0,2.171-2.1ZM15.1,36.306c-.022,0-.044,0-.066,0a12.236,12.236,0,0,1-4.768-.975,1.632,1.632,0,0,0-1.3.008L5.149,37.027l1.233-3.049a1.632,1.632,0,0,0-.271-1.67,9.525,9.525,0,0,1-2.349-6.238,9.708,9.708,0,0,1,3.016-6.952A16.472,16.472,0,0,0,11.6,27.938a18.24,18.24,0,0,0,11.871,5.023A11.993,11.993,0,0,1,15.1,36.306ZM26.769,18.031a1.632,1.632,0,1,1,0,3.264H16.979a1.632,1.632,0,0,1,0-3.264Zm4.9-3.264H16.979a1.632,1.632,0,0,1,0-3.264H31.665a1.632,1.632,0,0,1,0,3.264Zm0,0" transform="translate(-0.498 0)" fill="#00571a" />
                                            </svg>
                                        </div>
                                        <div className="">
                                            I will surely recomment this company to my friend.
                  </div>
                                    </div>
                                    <div className="alert alert-success">
                                        <div className="pr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 41.773 41.773">
                                                <path id="bubble-speak" d="M38.724,25.012A1.632,1.632,0,1,0,35.7,26.235l1.921,4.754-5.708-2.516a1.631,1.631,0,0,0-1.3-.008A15.737,15.737,0,0,1,24.4,29.72c-8.736,0-14.6-6.84-14.6-13.228C9.8,9.2,16.351,3.263,24.4,3.263s14.6,5.934,14.6,13.228a13.283,13.283,0,0,1-.145,1.869,1.632,1.632,0,1,0,3.228.482,16.481,16.481,0,0,0,.181-2.351A15.771,15.771,0,0,0,36.985,4.78,18.543,18.543,0,0,0,24.4,0,18.543,18.543,0,0,0,11.821,4.78,15.86,15.86,0,0,0,6.6,15.087,13.191,13.191,0,0,0,.5,26.069,12.659,12.659,0,0,0,3,33.633l-2.384,5.9a1.632,1.632,0,0,0,2.171,2.1L9.66,38.6a15.53,15.53,0,0,0,5.442.969c.041,0,.081,0,.121-.006A15.446,15.446,0,0,0,22.9,37.487a14.047,14.047,0,0,0,4.937-4.807,18.8,18.8,0,0,0,3.39-.942L39.981,35.6a1.632,1.632,0,0,0,2.171-2.1ZM15.1,36.306c-.022,0-.044,0-.066,0a12.236,12.236,0,0,1-4.768-.975,1.632,1.632,0,0,0-1.3.008L5.149,37.027l1.233-3.049a1.632,1.632,0,0,0-.271-1.67,9.525,9.525,0,0,1-2.349-6.238,9.708,9.708,0,0,1,3.016-6.952A16.472,16.472,0,0,0,11.6,27.938a18.24,18.24,0,0,0,11.871,5.023A11.993,11.993,0,0,1,15.1,36.306ZM26.769,18.031a1.632,1.632,0,1,1,0,3.264H16.979a1.632,1.632,0,0,1,0-3.264Zm4.9-3.264H16.979a1.632,1.632,0,0,1,0-3.264H31.665a1.632,1.632,0,0,1,0,3.264Zm0,0" transform="translate(-0.498 0)" fill="#00571a" />
                                            </svg>
                                        </div>
                                        <div className="">
                                            I am excited to work with this company.
                  </div>
                                    </div>
                                </div>

                                <div className="emp-card-description pt-3">
                                    <ul className="px-3">
                                        <li className="d-flex align-items-center pb-3">
                                            <div className="profile-icon iq-icon-box rounded-small text-center">
                                                <svg id="goal" xmlns="http://www.w3.org/2000/svg" width="43.773" height="43.773" viewBox="0 0 43.773 43.773">
                                                    <path id="Path_1" data-name="Path 1" d="M180.687,175.092a4.759,4.759,0,1,0,3.739,3.739l-2.8,2.8a2.644,2.644,0,0,1-3.739-3.739Zm0,0" transform="translate(-157.872 -157.872)" fill="#5f4591" />
                                                    <path id="Path_2" data-name="Path 2" d="M41.814,12.84,39.055,15.6a3.853,3.853,0,0,1-.923.683A17.183,17.183,0,1,1,27.493,5.642a3.849,3.849,0,0,1,.681-.924l2.759-2.759A21.891,21.891,0,1,0,41.814,12.84Zm0,0" transform="translate(0 0)" fill="#5f4591" />
                                                    <path id="Path_3" data-name="Path 3" d="M108.187,89.312l-.27-3.2a16.893,16.893,0,1,0,9.758,9.759l-3.2-.27-2.35,2.349a10.966,10.966,0,1,1-6.287-6.287Zm0,0" transform="translate(-80.006 -80.006)" fill="#5f4591" />
                                                    <path id="Path_4" data-name="Path 4" d="M247.193,13.054l.257,3.04-6.191,6.191a.881.881,0,1,0,1.246,1.246L248.7,17.34l3.04.256c.025,0,.049,0,.074,0a.881.881,0,0,0,.623-.258l3.738-3.739a.881.881,0,0,0-.549-1.5l-2.707-.228-.228-2.706a.881.881,0,0,0-1.5-.549l-3.738,3.739A.881.881,0,0,0,247.193,13.054Zm0,0" transform="translate(-213.148 -7.869)" fill="#5f4591" />
                                                </svg>
                                            </div>
                                            <div className="emp-loader-text">
                                                <b>
                                                    Goal Setting - 70% of the employees have done the goal setting
                      </b>
                                                <div className="pt-2">
                                                    <a href="#">Click here to view</a>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="d-flex align-items-center">
                                            <div className="profile-icon iq-icon-box rounded-small text-center">
                                                <svg id="goal" xmlns="http://www.w3.org/2000/svg" width="43.773" height="43.773" viewBox="0 0 43.773 43.773">
                                                    <path id="Path_1" data-name="Path 1" d="M180.687,175.092a4.759,4.759,0,1,0,3.739,3.739l-2.8,2.8a2.644,2.644,0,0,1-3.739-3.739Zm0,0" transform="translate(-157.872 -157.872)" fill="#5f4591" />
                                                    <path id="Path_2" data-name="Path 2" d="M41.814,12.84,39.055,15.6a3.853,3.853,0,0,1-.923.683A17.183,17.183,0,1,1,27.493,5.642a3.849,3.849,0,0,1,.681-.924l2.759-2.759A21.891,21.891,0,1,0,41.814,12.84Zm0,0" transform="translate(0 0)" fill="#5f4591" />
                                                    <path id="Path_3" data-name="Path 3" d="M108.187,89.312l-.27-3.2a16.893,16.893,0,1,0,9.758,9.759l-3.2-.27-2.35,2.349a10.966,10.966,0,1,1-6.287-6.287Zm0,0" transform="translate(-80.006 -80.006)" fill="#5f4591" />
                                                    <path id="Path_4" data-name="Path 4" d="M247.193,13.054l.257,3.04-6.191,6.191a.881.881,0,1,0,1.246,1.246L248.7,17.34l3.04.256c.025,0,.049,0,.074,0a.881.881,0,0,0,.623-.258l3.738-3.739a.881.881,0,0,0-.549-1.5l-2.707-.228-.228-2.706a.881.881,0,0,0-1.5-.549l-3.738,3.739A.881.881,0,0,0,247.193,13.054Zm0,0" transform="translate(-213.148 -7.869)" fill="#5f4591" />
                                                </svg>
                                            </div>
                                            <div className="emp-loader-text">
                                                <b className="text-danger">
                                                    HR Shared Services - 52% of the employees have raised query on CTC increment.
                      </b>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <div className="card-header text-center border-0">
                                <div className="header-title">
                                    <h4 className="card-title text-uppercase"><b>Career Management</b></h4>
                                </div>
                            </div>
                            <div className="card-body d-flex h-100 text-center px-4 pt-3 pb-1">
                                <div className="lgf-progress" data-percentage="70">
                                    <span className="lgf-progress-left">
                                        <span className="lgf-progress-bar lgf-progress--warning">
                                        </span>
                                    </span>
                                    <span className="lgf-progress-right">
                                        <span className="lgf-progress-bar lgf-progress--warning">
                                        </span>
                                    </span>
                                    <div className="lgf-progress-value">
                                        <div className="lgf-progress-text">
                                            <h6>990</h6>
                                            <span>Employee</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="emp-card-text">

                                <div className="px-3">
                                    <div className="alert alert-success mb-2">
                                        <div className="pr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 41.773 41.773">
                                                <path id="bubble-speak" d="M38.724,25.012A1.632,1.632,0,1,0,35.7,26.235l1.921,4.754-5.708-2.516a1.631,1.631,0,0,0-1.3-.008A15.737,15.737,0,0,1,24.4,29.72c-8.736,0-14.6-6.84-14.6-13.228C9.8,9.2,16.351,3.263,24.4,3.263s14.6,5.934,14.6,13.228a13.283,13.283,0,0,1-.145,1.869,1.632,1.632,0,1,0,3.228.482,16.481,16.481,0,0,0,.181-2.351A15.771,15.771,0,0,0,36.985,4.78,18.543,18.543,0,0,0,24.4,0,18.543,18.543,0,0,0,11.821,4.78,15.86,15.86,0,0,0,6.6,15.087,13.191,13.191,0,0,0,.5,26.069,12.659,12.659,0,0,0,3,33.633l-2.384,5.9a1.632,1.632,0,0,0,2.171,2.1L9.66,38.6a15.53,15.53,0,0,0,5.442.969c.041,0,.081,0,.121-.006A15.446,15.446,0,0,0,22.9,37.487a14.047,14.047,0,0,0,4.937-4.807,18.8,18.8,0,0,0,3.39-.942L39.981,35.6a1.632,1.632,0,0,0,2.171-2.1ZM15.1,36.306c-.022,0-.044,0-.066,0a12.236,12.236,0,0,1-4.768-.975,1.632,1.632,0,0,0-1.3.008L5.149,37.027l1.233-3.049a1.632,1.632,0,0,0-.271-1.67,9.525,9.525,0,0,1-2.349-6.238,9.708,9.708,0,0,1,3.016-6.952A16.472,16.472,0,0,0,11.6,27.938a18.24,18.24,0,0,0,11.871,5.023A11.993,11.993,0,0,1,15.1,36.306ZM26.769,18.031a1.632,1.632,0,1,1,0,3.264H16.979a1.632,1.632,0,0,1,0-3.264Zm4.9-3.264H16.979a1.632,1.632,0,0,1,0-3.264H31.665a1.632,1.632,0,0,1,0,3.264Zm0,0" transform="translate(-0.498 0)" fill="#00571a" />
                                            </svg>
                                        </div>
                                        <div className="">
                                            I have opportunity to participate in this Goal Setting process.
                  </div>
                                    </div>
                                    <div className="alert alert-success">
                                        <div className="pr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 41.773 41.773">
                                                <path id="bubble-speak" d="M38.724,25.012A1.632,1.632,0,1,0,35.7,26.235l1.921,4.754-5.708-2.516a1.631,1.631,0,0,0-1.3-.008A15.737,15.737,0,0,1,24.4,29.72c-8.736,0-14.6-6.84-14.6-13.228C9.8,9.2,16.351,3.263,24.4,3.263s14.6,5.934,14.6,13.228a13.283,13.283,0,0,1-.145,1.869,1.632,1.632,0,1,0,3.228.482,16.481,16.481,0,0,0,.181-2.351A15.771,15.771,0,0,0,36.985,4.78,18.543,18.543,0,0,0,24.4,0,18.543,18.543,0,0,0,11.821,4.78,15.86,15.86,0,0,0,6.6,15.087,13.191,13.191,0,0,0,.5,26.069,12.659,12.659,0,0,0,3,33.633l-2.384,5.9a1.632,1.632,0,0,0,2.171,2.1L9.66,38.6a15.53,15.53,0,0,0,5.442.969c.041,0,.081,0,.121-.006A15.446,15.446,0,0,0,22.9,37.487a14.047,14.047,0,0,0,4.937-4.807,18.8,18.8,0,0,0,3.39-.942L39.981,35.6a1.632,1.632,0,0,0,2.171-2.1ZM15.1,36.306c-.022,0-.044,0-.066,0a12.236,12.236,0,0,1-4.768-.975,1.632,1.632,0,0,0-1.3.008L5.149,37.027l1.233-3.049a1.632,1.632,0,0,0-.271-1.67,9.525,9.525,0,0,1-2.349-6.238,9.708,9.708,0,0,1,3.016-6.952A16.472,16.472,0,0,0,11.6,27.938a18.24,18.24,0,0,0,11.871,5.023A11.993,11.993,0,0,1,15.1,36.306ZM26.769,18.031a1.632,1.632,0,1,1,0,3.264H16.979a1.632,1.632,0,0,1,0-3.264Zm4.9-3.264H16.979a1.632,1.632,0,0,1,0-3.264H31.665a1.632,1.632,0,0,1,0,3.264Zm0,0" transform="translate(-0.498 0)" fill="#00571a" />
                                            </svg>
                                        </div>
                                        <div className="">
                                            My colleagues are supportive for me.
                  </div>
                                    </div>
                                </div>

                                <div className="emp-card-description pt-3">
                                    <ul className="px-3">
                                        <li className="d-flex align-items-center pb-3">
                                            <div className="profile-icon iq-icon-box rounded-small text-center">
                                                <svg id="goal" xmlns="http://www.w3.org/2000/svg" width="43.773" height="43.773" viewBox="0 0 43.773 43.773">
                                                    <path id="Path_1" data-name="Path 1" d="M180.687,175.092a4.759,4.759,0,1,0,3.739,3.739l-2.8,2.8a2.644,2.644,0,0,1-3.739-3.739Zm0,0" transform="translate(-157.872 -157.872)" fill="#5f4591" />
                                                    <path id="Path_2" data-name="Path 2" d="M41.814,12.84,39.055,15.6a3.853,3.853,0,0,1-.923.683A17.183,17.183,0,1,1,27.493,5.642a3.849,3.849,0,0,1,.681-.924l2.759-2.759A21.891,21.891,0,1,0,41.814,12.84Zm0,0" transform="translate(0 0)" fill="#5f4591" />
                                                    <path id="Path_3" data-name="Path 3" d="M108.187,89.312l-.27-3.2a16.893,16.893,0,1,0,9.758,9.759l-3.2-.27-2.35,2.349a10.966,10.966,0,1,1-6.287-6.287Zm0,0" transform="translate(-80.006 -80.006)" fill="#5f4591" />
                                                    <path id="Path_4" data-name="Path 4" d="M247.193,13.054l.257,3.04-6.191,6.191a.881.881,0,1,0,1.246,1.246L248.7,17.34l3.04.256c.025,0,.049,0,.074,0a.881.881,0,0,0,.623-.258l3.738-3.739a.881.881,0,0,0-.549-1.5l-2.707-.228-.228-2.706a.881.881,0,0,0-1.5-.549l-3.738,3.739A.881.881,0,0,0,247.193,13.054Zm0,0" transform="translate(-213.148 -7.869)" fill="#5f4591" />
                                                </svg>
                                            </div>
                                            <div className="emp-loader-text">
                                                <b>
                                                    Recognition - 40% of the employees have got rewarded for their excellent performance.
                      </b>
                                            </div>
                                        </li>

                                        <li className="d-flex align-items-center">
                                            <div className="profile-icon iq-icon-box rounded-small text-center">
                                                <svg id="goal" xmlns="http://www.w3.org/2000/svg" width="43.773" height="43.773" viewBox="0 0 43.773 43.773">
                                                    <path id="Path_1" data-name="Path 1" d="M180.687,175.092a4.759,4.759,0,1,0,3.739,3.739l-2.8,2.8a2.644,2.644,0,0,1-3.739-3.739Zm0,0" transform="translate(-157.872 -157.872)" fill="#5f4591" />
                                                    <path id="Path_2" data-name="Path 2" d="M41.814,12.84,39.055,15.6a3.853,3.853,0,0,1-.923.683A17.183,17.183,0,1,1,27.493,5.642a3.849,3.849,0,0,1,.681-.924l2.759-2.759A21.891,21.891,0,1,0,41.814,12.84Zm0,0" transform="translate(0 0)" fill="#5f4591" />
                                                    <path id="Path_3" data-name="Path 3" d="M108.187,89.312l-.27-3.2a16.893,16.893,0,1,0,9.758,9.759l-3.2-.27-2.35,2.349a10.966,10.966,0,1,1-6.287-6.287Zm0,0" transform="translate(-80.006 -80.006)" fill="#5f4591" />
                                                    <path id="Path_4" data-name="Path 4" d="M247.193,13.054l.257,3.04-6.191,6.191a.881.881,0,1,0,1.246,1.246L248.7,17.34l3.04.256c.025,0,.049,0,.074,0a.881.881,0,0,0,.623-.258l3.738-3.739a.881.881,0,0,0-.549-1.5l-2.707-.228-.228-2.706a.881.881,0,0,0-1.5-.549l-3.738,3.739A.881.881,0,0,0,247.193,13.054Zm0,0" transform="translate(-213.148 -7.869)" fill="#5f4591" />
                                                </svg>
                                            </div>
                                            <div className="emp-loader-text">
                                                <b className="text-danger">
                                                    Performnce Feedback - 40% of the employees have not recieved any feedback for performance in past 2 weeks.
                      </b>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <div className="card-header text-center border-0">
                                <div className="header-title">
                                    <h4 className="card-title text-uppercase"><b>Farewell</b></h4>
                                </div>
                            </div>
                            <div className="card-body d-flex h-100 text-center px-4 pt-3 pb-1">
                                <div className="lgf-progress" data-percentage="70">
                                    <span className="lgf-progress-left">
                                        <span className="lgf-progress-bar lgf-progress--orange">
                                        </span>
                                    </span>
                                    <span className="lgf-progress-right">
                                        <span className="lgf-progress-bar lgf-progress--orange">
                                        </span>
                                    </span>
                                    <div className="lgf-progress-value">
                                        <div className="lgf-progress-text">
                                            <h6>34</h6>
                                            <span>Employee</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="emp-card-text">

                                <div className="emp-card-description pt-3">
                                    <ul className="px-3">
                                        <li className="d-flex align-items-center pb-3">
                                            <div className="profile-icon iq-icon-box rounded-small text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 41.773 41.773">
                                                    <path id="bubble-speak" d="M38.724,25.012A1.632,1.632,0,1,0,35.7,26.235l1.921,4.754-5.708-2.516a1.631,1.631,0,0,0-1.3-.008A15.737,15.737,0,0,1,24.4,29.72c-8.736,0-14.6-6.84-14.6-13.228C9.8,9.2,16.351,3.263,24.4,3.263s14.6,5.934,14.6,13.228a13.283,13.283,0,0,1-.145,1.869,1.632,1.632,0,1,0,3.228.482,16.481,16.481,0,0,0,.181-2.351A15.771,15.771,0,0,0,36.985,4.78,18.543,18.543,0,0,0,24.4,0,18.543,18.543,0,0,0,11.821,4.78,15.86,15.86,0,0,0,6.6,15.087,13.191,13.191,0,0,0,.5,26.069,12.659,12.659,0,0,0,3,33.633l-2.384,5.9a1.632,1.632,0,0,0,2.171,2.1L9.66,38.6a15.53,15.53,0,0,0,5.442.969c.041,0,.081,0,.121-.006A15.446,15.446,0,0,0,22.9,37.487a14.047,14.047,0,0,0,4.937-4.807,18.8,18.8,0,0,0,3.39-.942L39.981,35.6a1.632,1.632,0,0,0,2.171-2.1ZM15.1,36.306c-.022,0-.044,0-.066,0a12.236,12.236,0,0,1-4.768-.975,1.632,1.632,0,0,0-1.3.008L5.149,37.027l1.233-3.049a1.632,1.632,0,0,0-.271-1.67,9.525,9.525,0,0,1-2.349-6.238,9.708,9.708,0,0,1,3.016-6.952A16.472,16.472,0,0,0,11.6,27.938a18.24,18.24,0,0,0,11.871,5.023A11.993,11.993,0,0,1,15.1,36.306ZM26.769,18.031a1.632,1.632,0,1,1,0,3.264H16.979a1.632,1.632,0,0,1,0-3.264Zm4.9-3.264H16.979a1.632,1.632,0,0,1,0-3.264H31.665a1.632,1.632,0,0,1,0,3.264Zm0,0" transform="translate(-0.498 0)" fill="#00571a" />
                                                </svg>
                                            </div>
                                            <div className="emp-loader-text p-0 text-danger">
                                                <b>
                                                    Recognition - 40% of the employees have got rewarded for their excellent performance.
                      </b>
                                            </div>
                                            <div className="p-0">
                                                <a className="text-danger" href="#">
                                                    <b><i className="las la-times h3"></i></b>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center pb-3">
                                            <div className="profile-icon iq-icon-box rounded-small text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 41.773 41.773">
                                                    <path id="bubble-speak" d="M38.724,25.012A1.632,1.632,0,1,0,35.7,26.235l1.921,4.754-5.708-2.516a1.631,1.631,0,0,0-1.3-.008A15.737,15.737,0,0,1,24.4,29.72c-8.736,0-14.6-6.84-14.6-13.228C9.8,9.2,16.351,3.263,24.4,3.263s14.6,5.934,14.6,13.228a13.283,13.283,0,0,1-.145,1.869,1.632,1.632,0,1,0,3.228.482,16.481,16.481,0,0,0,.181-2.351A15.771,15.771,0,0,0,36.985,4.78,18.543,18.543,0,0,0,24.4,0,18.543,18.543,0,0,0,11.821,4.78,15.86,15.86,0,0,0,6.6,15.087,13.191,13.191,0,0,0,.5,26.069,12.659,12.659,0,0,0,3,33.633l-2.384,5.9a1.632,1.632,0,0,0,2.171,2.1L9.66,38.6a15.53,15.53,0,0,0,5.442.969c.041,0,.081,0,.121-.006A15.446,15.446,0,0,0,22.9,37.487a14.047,14.047,0,0,0,4.937-4.807,18.8,18.8,0,0,0,3.39-.942L39.981,35.6a1.632,1.632,0,0,0,2.171-2.1ZM15.1,36.306c-.022,0-.044,0-.066,0a12.236,12.236,0,0,1-4.768-.975,1.632,1.632,0,0,0-1.3.008L5.149,37.027l1.233-3.049a1.632,1.632,0,0,0-.271-1.67,9.525,9.525,0,0,1-2.349-6.238,9.708,9.708,0,0,1,3.016-6.952A16.472,16.472,0,0,0,11.6,27.938a18.24,18.24,0,0,0,11.871,5.023A11.993,11.993,0,0,1,15.1,36.306ZM26.769,18.031a1.632,1.632,0,1,1,0,3.264H16.979a1.632,1.632,0,0,1,0-3.264Zm4.9-3.264H16.979a1.632,1.632,0,0,1,0-3.264H31.665a1.632,1.632,0,0,1,0,3.264Zm0,0" transform="translate(-0.498 0)" fill="#00571a" />
                                                </svg>
                                            </div>
                                            <div className="emp-loader-text p-0 text-danger">
                                                <b>
                                                    Recognition - 40% of the employees have got rewarded for their excellent performance.
                      </b>
                                            </div>
                                            <div className="p-0">
                                                <a className="text-danger" href="#">
                                                    <b><i className="las la-times h3"></i></b>
                                                </a>
                                            </div>
                                        </li>

                                        <li className="d-flex align-items-center">
                                            <div className="profile-icon iq-icon-box rounded-small text-center">
                                                <svg id="goal" xmlns="http://www.w3.org/2000/svg" width="43.773" height="43.773" viewBox="0 0 43.773 43.773">
                                                    <path id="Path_1" data-name="Path 1" d="M180.687,175.092a4.759,4.759,0,1,0,3.739,3.739l-2.8,2.8a2.644,2.644,0,0,1-3.739-3.739Zm0,0" transform="translate(-157.872 -157.872)" fill="#5f4591" />
                                                    <path id="Path_2" data-name="Path 2" d="M41.814,12.84,39.055,15.6a3.853,3.853,0,0,1-.923.683A17.183,17.183,0,1,1,27.493,5.642a3.849,3.849,0,0,1,.681-.924l2.759-2.759A21.891,21.891,0,1,0,41.814,12.84Zm0,0" transform="translate(0 0)" fill="#5f4591" />
                                                    <path id="Path_3" data-name="Path 3" d="M108.187,89.312l-.27-3.2a16.893,16.893,0,1,0,9.758,9.759l-3.2-.27-2.35,2.349a10.966,10.966,0,1,1-6.287-6.287Zm0,0" transform="translate(-80.006 -80.006)" fill="#5f4591" />
                                                    <path id="Path_4" data-name="Path 4" d="M247.193,13.054l.257,3.04-6.191,6.191a.881.881,0,1,0,1.246,1.246L248.7,17.34l3.04.256c.025,0,.049,0,.074,0a.881.881,0,0,0,.623-.258l3.738-3.739a.881.881,0,0,0-.549-1.5l-2.707-.228-.228-2.706a.881.881,0,0,0-1.5-.549l-3.738,3.739A.881.881,0,0,0,247.193,13.054Zm0,0" transform="translate(-213.148 -7.869)" fill="#5f4591" />
                                                </svg>
                                            </div>
                                            <div className="emp-loader-text p-0">
                                                <b>
                                                    Full and final settlement : 34 Employees still required to be closed by HR team.
                      </b>
                                            </div>
                                            <div className="">
                                                <a className="text-success" href="#">
                                                    <b><i className="las la-check h3"></i></b>
                                                </a>
                                            </div>
                                        </li>

                                        <li className="d-flex align-items-center pt-3">
                                            <div className="profile-icon iq-icon-box rounded-small text-center">
                                                <svg id="goal" xmlns="http://www.w3.org/2000/svg" width="43.773" height="43.773" viewBox="0 0 43.773 43.773">
                                                    <path id="Path_1" data-name="Path 1" d="M180.687,175.092a4.759,4.759,0,1,0,3.739,3.739l-2.8,2.8a2.644,2.644,0,0,1-3.739-3.739Zm0,0" transform="translate(-157.872 -157.872)" fill="#5f4591" />
                                                    <path id="Path_2" data-name="Path 2" d="M41.814,12.84,39.055,15.6a3.853,3.853,0,0,1-.923.683A17.183,17.183,0,1,1,27.493,5.642a3.849,3.849,0,0,1,.681-.924l2.759-2.759A21.891,21.891,0,1,0,41.814,12.84Zm0,0" transform="translate(0 0)" fill="#5f4591" />
                                                    <path id="Path_3" data-name="Path 3" d="M108.187,89.312l-.27-3.2a16.893,16.893,0,1,0,9.758,9.759l-3.2-.27-2.35,2.349a10.966,10.966,0,1,1-6.287-6.287Zm0,0" transform="translate(-80.006 -80.006)" fill="#5f4591" />
                                                    <path id="Path_4" data-name="Path 4" d="M247.193,13.054l.257,3.04-6.191,6.191a.881.881,0,1,0,1.246,1.246L248.7,17.34l3.04.256c.025,0,.049,0,.074,0a.881.881,0,0,0,.623-.258l3.738-3.739a.881.881,0,0,0-.549-1.5l-2.707-.228-.228-2.706a.881.881,0,0,0-1.5-.549l-3.738,3.739A.881.881,0,0,0,247.193,13.054Zm0,0" transform="translate(-213.148 -7.869)" fill="#5f4591" />
                                                </svg>
                                            </div>
                                            <div className="emp-loader-text p-0">
                                                <b>
                                                    23 Employees are working from home today who need to submit their assets.
                      </b>
                                            </div>
                                            <div className="">
                                                <a className="text-danger" href="#">
                                                    <b><i className="las la-times h3"></i></b>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>)
}