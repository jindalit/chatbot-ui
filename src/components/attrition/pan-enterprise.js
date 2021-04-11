import React, { useEffect, useState } from 'react'
import {
    PieChart, Pie, Cell, Label, Tooltip
} from 'recharts';


const colors = ['#D80000', '#FF5607']
const colors2 = ['#FF9800', '#FFC100']
export default (props) => {
    const { employeeRisk } = props
    const [defaultVal, setDefaultVal] = useState(true)
    const [predictorData, setPredictorData] = useState({})
    const [type, setType] = useState('')
    const [htmlData, setHtmlData] = useState()
    const [medimumHtmlData, setMedimumHtmlData] = useState()
    useEffect(() => {
        setDefaultVal(true)
    }, [employeeRisk])

    const predictorType = type => {
        setType(type)
        switch (type) {
            case 'age':

                setDefaultVal(false)
                setPredictorData({
                    high: [{ name: 'Below 30', value: employeeRisk.ageGroup.highRisk30Below }, { name: 'Above 30', value: employeeRisk.ageGroup.highRisk30Above }],
                    medium: [{ name: 'Below 30', value: employeeRisk.ageGroup.mediumRisk30Below }, { name: 'Above 30', value: employeeRisk.ageGroup.mediumRisk30Above }]
                })
                setHtmlData(
                    <div className="emp-card-text text-center">
                        <div className="emp-card-description py-3"><small>You need to focus on <b className="bold-danger">{(employeeRisk.ageGroup.highRisk30Above / employeeRisk.totalAssociate * 100).toFixed(2)}%</b> Above 30 age and <br /><b className="bold-danger">{(employeeRisk.ageGroup.highRisk30Below / employeeRisk.totalAssociate * 100).toFixed(2)}%</b> Below 30 age Employee on priority basis</small></div>
                    </div>)
                setMedimumHtmlData(
                    <div className="emp-card-text text-center">
                        <div className="emp-card-description py-3"><small>You need to focus on <b className="bold-danger">{(employeeRisk.ageGroup.mediumRisk30Above / employeeRisk.totalAssociate * 100).toFixed(2)}%</b> Above 30 age and <br /><b className="bold-danger">{(employeeRisk.ageGroup.mediumRisk30Below / employeeRisk.totalAssociate * 100).toFixed(2)}%</b> Below 30 age Employee on priority basis</small></div>
                    </div>)
                return
            case 'performers':
                setDefaultVal(false)
                setPredictorData({
                    high: [{ name: 'Below 3 Rating', value: employeeRisk.performers.highRisk3RatingBelow }, { name: 'Above 3 Rating', value: employeeRisk.performers.highRisk3RatingAbove }],
                    medium: [{ name: 'Below 3 Rating', value: employeeRisk.performers.mediumRisk3RatingBelow }, { name: 'Above 3 Rating', value: employeeRisk.performers.mediumRisk3RatingAbove }]
                })
                setHtmlData(
                    <div className="emp-card-text text-center">
                        <div className="emp-card-description py-3"><small><b className="bold-danger">{(employeeRisk.performers.highRisk3RatingAbove / employeeRisk.totalAssociate * 100).toFixed(2)}%</b> Above 3 Rating and <br />You need to focus on <b className="bold-danger">{(employeeRisk.performers.highRisk3RatingBelow / employeeRisk.totalAssociate * 100).toFixed(2)}%</b> Below 3 Rating Employee on priority basis</small></div>
                    </div>)
                setMedimumHtmlData(
                    <div className="emp-card-text text-center">
                        <div className="emp-card-description py-3"><small><b className="bold-danger">{(employeeRisk.performers.mediumRisk3RatingAbove / employeeRisk.totalAssociate * 100).toFixed(2)}%</b> Above 3 rating and <br />You need to focus on <b className="bold-danger">{(employeeRisk.performers.mediumRisk3RatingBelow / employeeRisk.totalAssociate * 100).toFixed(2)}%</b> Below 3 Rating Employee on priority basis</small></div>
                    </div>)
                return
            case 'qualification':
                setDefaultVal(false)
                setPredictorData({
                    high: [{ name: 'Below 22', value: employeeRisk.educations.highRisk22YearBelow }, { name: 'Above 22', value: employeeRisk.educations.highRisk22YearAbove }],
                    medium: [{ name: 'Below 22', value: employeeRisk.educations.mediumRisk22YearBelow }, { name: 'Above 22', value: employeeRisk.educations.mediumRisk22YearAbove }]
                })
                setHtmlData(
                    <div className="emp-card-text text-center">
                        <div className="emp-card-description py-3"><small>You need to focus on <b className="bold-danger">{(employeeRisk.educations.highRisk22YearAbove / employeeRisk.totalAssociate * 100).toFixed(2)}%</b> Above 22 years and <br /><b className="bold-danger">{(employeeRisk.educations.highRisk22YearBelow / employeeRisk.totalAssociate * 100).toFixed(2)}%</b> Below 22 years Employee on priority basis</small></div>
                    </div>)
                setMedimumHtmlData(
                    <div className="emp-card-text text-center">
                        <div className="emp-card-description py-3"><small>You need to focus on <b className="bold-danger">{(employeeRisk.educations.mediumRisk22YearAbove / employeeRisk.totalAssociate * 100).toFixed(2)}%</b> Above 22 years and <br /><b className="bold-danger">{(employeeRisk.educations.mediumRisk22YearBelow / employeeRisk.totalAssociate * 100).toFixed(2)}%</b> Below 22 years Employee on priority basis</small></div>
                    </div>)
                return
            case 'experiance':
                setDefaultVal(false)
                setPredictorData({
                    high: [{ name: 'Below 10 years experience', value: employeeRisk.experience.highRisk10YearBelow }, { name: 'Above 10 years experience', value: employeeRisk.experience.highRisk10YearAbove }],
                    medium: [{ name: 'Below 10 years experience', value: employeeRisk.experience.mediumRisk10YearBelow }, { name: 'Above 10 years experience', value: employeeRisk.experience.mediumRisk10YearAbove }]
                })
                setHtmlData(
                    <div className="emp-card-text text-center">
                        <div className="emp-card-description py-3"><small>You need to focus on <b className="bold-danger">{(employeeRisk.experience.highRisk10YearAbove / employeeRisk.totalAssociate * 100).toFixed(2)}%</b> Above 10 years experience and <br /><b className="bold-danger">{(employeeRisk.experience.highRisk10YearBelow / employeeRisk.totalAssociate * 100).toFixed(2)}%</b> Below 10 years experience Employee on priority basis</small></div>
                    </div>)
                setMedimumHtmlData(
                    <div className="emp-card-text text-center">
                        <div className="emp-card-description py-3"><small>You need to focus on <b className="bold-danger">{(employeeRisk.experience.mediumRisk10YearAbove / employeeRisk.totalAssociate * 100).toFixed(2)}%</b> Above 10 years experience and <br /><b className="bold-danger">{(employeeRisk.experience.mediumRisk10YearBelow / employeeRisk.totalAssociate * 100).toFixed(2)}%</b> Below 10 years experience Employee on priority basis</small></div>
                    </div>)
                return
            case 'gender':
                setDefaultVal(false)
                setPredictorData({
                    high: [{ name: 'Male', value: employeeRisk.gender.highRiskMale }, { name: 'Female', value: employeeRisk.gender.highRiskFemale }],
                    medium: [{ name: 'Male', value: employeeRisk.gender.mediumRiskMale }, { name: 'Female', value: employeeRisk.gender.mediumRiskFemale }]
                })
                setHtmlData(
                    <div className="emp-card-text text-center">
                        <div className="emp-card-description py-3"><small>You need to focus on <b className="bold-danger">{(employeeRisk.gender.highRiskFemale / employeeRisk.totalAssociate * 100).toFixed(2)}%</b> Female and <br /><b className="bold-danger">{(employeeRisk.gender.highRiskMale / employeeRisk.totalAssociate * 100).toFixed(2)}%</b> Male Employee on priority basis</small></div>
                    </div>)
                setMedimumHtmlData(
                    <div className="emp-card-text text-center">
                        <div className="emp-card-description py-3"><small>You need to focus on <b className="bold-danger">{(employeeRisk.gender.mediumRiskFemale / employeeRisk.totalAssociate * 100).toFixed(2)}%</b> Female and <br /><b className="bold-danger">{(employeeRisk.gender.mediumRiskMale / employeeRisk.totalAssociate * 100).toFixed(2)}%</b> Male Employee on priority basis</small></div>
                    </div>)
                return
            default:
                setDefaultVal(true)
                return
        }
    }
    return (
        <div className="card card-body">
            <div className="row d-flex justify-content-between">

                <div className="col-12 h-100">
                    <div className="mb-2">
                        <h3 className="text-center">Pan Enterprise Employees at high flight risk</h3>
                    </div>
                    <div className="d-flex">
                        {defaultVal && employeeRisk.flightHighRisk && <div className="d-flex card-body emp-card-1 percentage-card mr-1 align-self-center">

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
                                        <span>Employee <br /><br /><br /> Percentage</span>
                                    </div>
                                </div>
                            </div>
                            <div className="emp-card-text text-center">
                                <p>Above {employeeRisk.flightHighRisk.highRiskPercentage}%</p>
                                <div className="emp-card-description py-3">
                                    <p className="m-1"><b className="bold-danger">{employeeRisk.flightHighRisk.highRiskPercentage}% ({employeeRisk.flightHighRisk.totalHighRiskEmployee}/{employeeRisk.totalAssociate})</b> Employee is at <b className="bold-danger">high risk</b></p>
                                    You need to focus on {employeeRisk.flightHighRisk.highRiskPercentage}% Employee on priority basis
                                </div>
                            </div>
                        </div>}
                        {!defaultVal && <div className="d-flex card-body emp-card-1 percentage-card mr-1 align-self-center">
                            <PieChart width={180} height={180}>
                                <Pie
                                    data={predictorData.high}
                                    dataKey="value"
                                    startAngle={110}
                                    endAngle={-250}
                                    innerRadius={75}
                                    outerRadius={90}
                                    isAnimationActive={true}
                                >
                                    {
                                        predictorData.high.map((entry, index) => (
                                            <Cell key={`slice-${index}`} fill={colors[index]} />
                                        ))
                                    }
                                    <Label width={50} position="center" style={{ fontSize: '1.2em', }}>
                                        High Risk Employees
                                    </Label>
                                </Pie>
                                <Tooltip />
                            </PieChart>
                            {htmlData}
                        </div>}
                        {defaultVal && employeeRisk.flightMediumRisk &&
                            <div className="card-body d-flex emp-card-2 percentage-card align-self-center">
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
                                            <span>Employee<br /><br /><br /> Percentage</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="emp-card-text text-center">
                                    <p>Between {employeeRisk.flightMediumRisk.mediumRiskPercentage}% to {employeeRisk.flightMediumRisk.mediumRiskPercentage + 10}%</p>
                                    <div className="emp-card-description py-3">
                                        <p className="m-1"><b>{employeeRisk.flightMediumRisk.mediumRiskPercentage}% ({employeeRisk.flightMediumRisk.totalMediumRiskEmployee}/{employeeRisk.totalAssociate})</b> Employee is at <b>medium risk</b></p>
                                        You need to focus on {employeeRisk.flightMediumRisk.mediumRiskPercentage}% Employee on priority basis
                                    </div>
                                </div>
                            </div>}
                        {!defaultVal && <div className="d-flex card-body emp-card-2 percentage-card align-self-center">
                            <PieChart width={180} height={180}>
                                <Pie
                                    data={predictorData.medium}
                                    dataKey="value"
                                    startAngle={110}
                                    endAngle={-250}
                                    innerRadius={75}
                                    outerRadius={90}
                                    isAnimationActive={true}
                                >
                                    {
                                        predictorData.medium.map((entry, index) => (
                                            <Cell key={`slice-${index}`} fill={colors2[index]} />
                                        ))
                                    }
                                    <Label width={50} position="center" style={{ fontSize: '1.2em', }}>
                                        Medimun Risk Employees
                                    </Label>
                                </Pie>
                                <Tooltip />
                            </PieChart>
                            {medimumHtmlData}
                        </div>}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card card-block card-stretch card-height" id="attrition-predictor-type">
                        <div className="card-header">
                            <div className="header-title">
                                <h5 className="card-title">Attrition Predictor Type</h5>
                            </div>
                        </div>
                        <div className="card-body">
                            <ul className="list-inline p-0 m-0 predictor-type">
                                <a href="#">
                                    <li className={"d-flex align-items-center mb-3 " + (type === 'age' ? 'active' : '')} onClick={() => predictorType('age')}>
                                        <div className="profile-icon iq-icon-box rounded-small text-center">
                                            <img src={process.env.PUBLIC_URL + '/images/age-group.PNG'} />
                                        </div>
                                        <div className="pl-3 w-100">
                                            <h5>Age Group</h5>
                                            <small>Employee age between 30+ and 80</small>
                                        </div>

                                    </li>
                                </a>
                                <a href="#">
                                    <li className={"d-flex align-items-center mb-3 " + (type === 'performers' ? 'active' : '')} onClick={() => predictorType('performers')}>
                                        <div className="profile-icon iq-icon-box rounded-small text-center">
                                            <img src={process.env.PUBLIC_URL + '/images/performers.PNG'} />
                                        </div>
                                        <div className="pl-3 w-100">
                                            <h5>Performers</h5>
                                            <small>Employee at flight risk across performance</small>
                                        </div>

                                    </li>
                                </a>
                                <a href="#">
                                    <li className={"d-flex align-items-center mb-3 " + (type === 'qualification' ? 'active' : '')} onClick={() => predictorType('qualification')}>
                                        <div className="profile-icon iq-icon-box rounded-small text-center">
                                            <img src={process.env.PUBLIC_URL + '/images/educations.PNG'} />
                                        </div>
                                        <div className="pl-3 w-100">
                                            <h5>Education</h5>
                                            <small>Employees at flight risk at qualification</small>
                                        </div>

                                    </li>
                                </a>
                                <a href="#">
                                    <li className={"d-flex align-items-center mb-3 " + (type === 'experiance' ? 'active' : '')} onClick={() => predictorType('experiance')}>
                                        <div className="profile-icon iq-icon-box rounded-small text-center">
                                            <img src={process.env.PUBLIC_URL + '/images/gender.PNG'} />
                                        </div>
                                        <div className="pl-3 w-100">
                                            <h5>Experience</h5>
                                            <small>Employees at flight risk at Experience</small>
                                        </div>

                                    </li>
                                </a>
                                <a href="#">
                                    <li className={"d-flex align-items-center " + (type === 'gender' ? 'active' : '')} onClick={() => predictorType('gender')}>
                                        <div className="profile-icon iq-icon-box rounded-small text-center">
                                            <img src={process.env.PUBLIC_URL + '/images/gender.PNG'} />
                                        </div>
                                        <div className="pl-3 w-100">
                                            <h5>Gender</h5>
                                            <small>Employees at flight risk at gender</small>
                                        </div>

                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div >
                </div >
            </div >
        </div >
    )
}