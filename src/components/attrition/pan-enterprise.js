import React from 'react'


export default (props) => {
    return (
        <div className="card card-body">
            <div className="row d-flex justify-content-between">

                <div className="col-8 h-100">
                    <div className="">
                        <h3 className="text-center">Pan Enterprise Employees at high flight risk</h3>
                    </div>
                    <div className="d-flex">
                        <div className="card card-body emp-card-1 percentage-card mr-1 align-self-center">
                            <div className="lgf-progress" data-percentage="10">
                                <span className="lgf-progress-left">
                                    <span className="lgf-progress-bar lgf-progress--orange"></span>
                                </span>
                                <span className="lgf-progress-right">
                                    <span className="lgf-progress-bar lgf-progress--orange"></span>
                                </span>
                                <div className="lgf-progress-value">
                                    <div className="lgf-progress-text">
                                        <h6>6%</h6>
                                        <span>Employee Percentage</span>
                                    </div>
                                </div>
                            </div>
                            <div className="emp-card-text text-center">
                                <p>Above 6%</p>
                                <div className="emp-card-description py-3">
                                    <p className="m-1"><b className="bold-danger">6% (2/34)</b> Employee is at <b className="bold-danger">high risk</b></p>
                                    <small>You need to focus on 6% Employee on priority basis</small>
                                </div>
                                <div className="pt-3">
                                    <a className="my-3" href="#">Click here to view</a>
                                </div>
                            </div>
                        </div>
                        <div className="card card-body emp-card-2 percentage-card align-self-center">
                            <div className="lgf-progress" data-percentage="50">
                                <span className="lgf-progress-left">
                                    <span className="lgf-progress-bar lgf-progress--warning"></span>
                                </span>
                                <span className="lgf-progress-right">
                                    <span className="lgf-progress-bar lgf-progress--warning"></span>
                                </span>
                                <div className="lgf-progress-value">
                                    <div className="lgf-progress-text">
                                        <h6>52%</h6>
                                        <span>Employee Percentage</span>
                                    </div>
                                </div>
                            </div>
                            <div className="emp-card-text text-center">
                                <p>Between 50% to 70 Percent</p>
                                <div className="emp-card-description py-3">
                                    <p className="m-1"><b>52% (18/34)</b> Employee is at <b>high risk</b></p>
                                    <small>You need to focus on 52% Employee on priority basis</small>
                                </div>
                                <div className="pt-3">
                                    <a className="my-3" href="#">Click here to view</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card card-block card-stretch card-height" id="attrition-predictor-type">
                        <div className="card-header">
                            <div className="header-title">
                                <h5 className="card-title">Attrition Predictor Type</h5>
                            </div>
                        </div>
                        <div className="card-body">
                            <ul className="list-inline p-0 m-0">
                                <a href="#">
                                    <li className="d-flex align-items-center mb-3">
                                        <div className="profile-icon iq-icon-box rounded-small text-center">
                                            <img src={process.env.PUBLIC_URL + 'images/age-group.PNG'} />
                                        </div>
                                        <div className="pl-3 w-100">
                                            <h5>Age Group</h5>
                                            <small>Employee age between 30+ and 80</small>
                                        </div>
                                        <div className="pull-right">
                                            <i className="fa fa-angle-right fa-2x"></i>
                                        </div>
                                    </li>
                                </a>
                                <a href="#">
                                    <li className="d-flex align-items-center mb-3">
                                        <div className="profile-icon iq-icon-box rounded-small text-center">
                                            <img src={process.env.PUBLIC_URL + 'images/performers.PNG'} />
                                        </div>
                                        <div className="pl-3 w-100">
                                            <h5>Performers</h5>
                                            <small>Employee at flight risk across performance</small>
                                        </div>
                                        <div className="pull-right">
                                            <i className="fa fa-angle-right fa-2x"></i>
                                        </div>
                                    </li>
                                </a>
                                <a href="#">
                                    <li className="d-flex align-items-center mb-3">
                                        <div className="profile-icon iq-icon-box rounded-small text-center">
                                            <img src={process.env.PUBLIC_URL + 'images/educations.PNG'} />
                                        </div>
                                        <div className="pl-3 w-100">
                                            <h5>Educations</h5>
                                            <small>Employees at flight risk at qualification</small>
                                        </div>
                                        <div className="pull-right">
                                            <i className="fa fa-angle-right fa-2x"></i>
                                        </div>
                                    </li>
                                </a>
                                <a href="#">
                                    <li className="d-flex align-items-center mb-3">
                                        <div className="profile-icon iq-icon-box rounded-small text-center">
                                            <img src={process.env.PUBLIC_URL + 'images/gender.PNG'} />
                                        </div>
                                        <div className="pl-3 w-100">
                                            <h5>Experience</h5>
                                            <small>Employees at flight risk at Experience</small>
                                        </div>
                                        <div className="pull-right">
                                            <i className="fa fa-angle-right fa-2x"></i>
                                        </div>
                                    </li>
                                </a>
                                <a href="#">
                                    <li className="d-flex align-items-center">
                                        <div className="profile-icon iq-icon-box rounded-small text-center">
                                            <img src={process.env.PUBLIC_URL + 'images/gender.PNG'} />
                                        </div>
                                        <div className="pl-3 w-100">
                                            <h5>Gender</h5>
                                            <small>Employees at flight risk at gender</small>
                                        </div>
                                        <div className="pull-right">
                                            <i className="fa fa-angle-right fa-2x"></i>
                                        </div>
                                    </li>
                                </a>
                            </ul>
                            <a className="pull-right mt-3" href="#"><small>Click here to view</small></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}