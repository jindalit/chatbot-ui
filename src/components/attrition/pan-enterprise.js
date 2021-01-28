import React, { useEffect, useState } from 'react'


export default (props) => {
    const { employeeRisk } = props
    const [defaultVal, setDefaultVal] = useState(true)
    const [predictorData, setPredictorData] = useState({})
    const [htmlData, setHtmlData] = useState()
    useEffect(() => {
        setDefaultVal(true)
    }, [employeeRisk])

    const predictorType = type => {
        /*  switch (type) {
             case 'age':
                 setDefaultVal(false)
                 setPredictorData({
                     high: [employeeRisk.ageGroup.highRisk30Below, employeeRisk.ageGroup.highRisk30Above],
                     medium: [employeeRisk.ageGroup.mediumRisk30Below, employeeRisk.ageGroup.mediumRisk30Above]
                 })
                 setHtmlData(
                     <div className="emp-card-text text-center">
                         <p>Above 30 {(employeeRisk.ageGroup.highRisk30Above / employeeRisk.ageGroup.totalAssociate) * 100}% and Below 30 {(employeeRisk.ageGroup.highRisk30Below / employeeRisk.ageGroup.totalAssociate) * 100}%</p>
                         <div className="emp-card-description py-3">
                             <p className="m-1"><b className="bold-danger">{employeeRisk.flightHighRisk.highRiskPercentage}% ({employeeRisk.flightHighRisk.totalHighRiskEmployee}/{employeeRisk.totalAssociate})</b> Employee is at <b className="bold-danger">high risk</b></p>
                             <small>You need to focus on {employeeRisk.flightHighRisk.highRiskPercentage}% Employee on priority basis</small>
                         </div>
                     </div>
                 )
 
                 return
             case 'performers':
                 return
             default:
                 setDefaultVal(true)
                 return
         } */
    }
    return (
        <div className="card card-body">
            <div className="row d-flex justify-content-between">

                <div className="col-8 h-100">
                    <div className="">
                        <h3 className="text-center">Pan Enterprise Employees at high flight risk</h3>
                    </div>
                    <div className="d-flex">
                        {defaultVal && employeeRisk.flightHighRisk && <div className="card card-body emp-card-1 percentage-card mr-1 align-self-center">

                            <div className="lgf-progress" data-percentage={Math.ceil(employeeRisk.flightHighRisk.highRiskPercentage / 10) * 10}>
                                <span className="lgf-progress-left">
                                    <span className="lgf-progress-bar lgf-progress--orange"></span>
                                </span>
                                <span className="lgf-progress-right">
                                    <span className="lgf-progress-bar lgf-progress--orange"></span>
                                </span>
                                <div className="lgf-progress-value">
                                    <div className="lgf-progress-text">
                                        <h6>{employeeRisk.flightHighRisk.highRiskPercentage}%</h6>
                                        <span>Employee Percentage</span>
                                    </div>
                                </div>
                            </div>
                            <div className="emp-card-text text-center">
                                <p>Above {employeeRisk.flightHighRisk.highRiskPercentage}%</p>
                                <div className="emp-card-description py-3">
                                    <p className="m-1"><b className="bold-danger">{employeeRisk.flightHighRisk.highRiskPercentage}% ({employeeRisk.flightHighRisk.totalHighRiskEmployee}/{employeeRisk.totalAssociate})</b> Employee is at <b className="bold-danger">high risk</b></p>
                                    <small>You need to focus on {employeeRisk.flightHighRisk.highRiskPercentage}% Employee on priority basis</small>
                                </div>
                            </div>
                        </div>}
                        {defaultVal && employeeRisk.flightMediumRisk &&
                            <div className="card card-body emp-card-2 percentage-card align-self-center">
                                <div className="lgf-progress" data-percentage={Math.ceil(employeeRisk.flightMediumRisk.mediumRiskPercentage / 10) * 10}>
                                    <span className="lgf-progress-left">
                                        <span className="lgf-progress-bar lgf-progress--warning"></span>
                                    </span>
                                    <span className="lgf-progress-right">
                                        <span className="lgf-progress-bar lgf-progress--warning"></span>
                                    </span>
                                    <div className="lgf-progress-value">
                                        <div className="lgf-progress-text">
                                            <h6>{employeeRisk.flightMediumRisk.mediumRiskPercentage}%</h6>
                                            <span>Employee Percentage</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="emp-card-text text-center">
                                    <p>Between {employeeRisk.flightMediumRisk.mediumRiskPercentage}% to {employeeRisk.flightMediumRisk.mediumRiskPercentage + 10}%</p>
                                    <div className="emp-card-description py-3">
                                        <p className="m-1"><b>{employeeRisk.flightMediumRisk.mediumRiskPercentage}% ({employeeRisk.flightMediumRisk.totalMediumRiskEmployee}/{employeeRisk.totalAssociate})</b> Employee is at <b>medium risk</b></p>
                                        <small>You need to focus on {employeeRisk.flightMediumRisk.mediumRiskPercentage}% Employee on priority basis</small>
                                    </div>
                                </div>
                            </div>}
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
                                    <li className="d-flex align-items-center mb-3" onClick={() => predictorType('age')}>
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
                                    <li className="d-flex align-items-center mb-3" onClick={() => predictorType('performers')}>
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
                                    <li className="d-flex align-items-center mb-3" onClick={() => predictorType('qualification')}>
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
                                    <li className="d-flex align-items-center mb-3" onClick={() => predictorType('experiance')}>
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