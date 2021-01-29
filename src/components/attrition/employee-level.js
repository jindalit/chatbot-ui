import React, { useEffect, useState } from 'react'


export default (props) => {
    const { employeeCovered } = props
    const [employees, setEmployee] = useState([])
    const [type, setType] = useState('high')
    useEffect(() => {
        riskType('high')
    }, [employeeCovered])
    const riskType = type => {
        setType(type)
        if (type === 'high' && employeeCovered.highRisk) {
            setEmployee(employeeCovered.highRisk.employee)
        } else if (type === 'medium' && employeeCovered.mediumRisk) {
            setEmployee(employeeCovered.mediumRisk.employee)
        } else if (type === 'no' && employeeCovered.noRisk) {
            setEmployee(employeeCovered.noRisk.employee)
        } else {
            setEmployee([])
        }
    }
    return (
        <React.Fragment>
            <div className="card card-body my-3 emp-card-1 employee-level">
                <div className="d-flex align-items-center">

                    <div className="col-4">
                        <h3>Risk Analysis of employees covered</h3>
                    </div>
                    {employeeCovered.highRisk && <div className="d-flex align-items-center">
                        <div className="mx-3 lgf-progress lgf-progress-small" data-percentage={Math.ceil(employeeCovered.highRisk.highRiskPercentage / 10) * 10}>
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
                                    <h6>{employeeCovered.highRisk.highRiskPercentage}%</h6>
                                </div>
                            </div>
                        </div>
                        <p onClick={() => riskType('high')} className={type === 'high' ? 'active' : ''}>High Risk Employees</p>
                    </div>
                    }
                    {employeeCovered.mediumRisk && <div className="d-flex align-items-center">
                        <div className="mx-3 lgf-progress lgf-progress-small" data-percentage={Math.ceil(employeeCovered.mediumRisk.mediumRiskPercentage / 10) * 10}>
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
                                    <h6>{employeeCovered.mediumRisk.mediumRiskPercentage}%</h6>
                                </div>
                            </div>
                        </div>
                        <p onClick={() => riskType('medium')} className={type === 'medium' ? 'active' : ''}> Medium Risk Employees</p>
                    </div>}

                    {employeeCovered.noRisk && <div className="d-flex align-items-center">
                        <div className="mx-3 lgf-progress lgf-progress-small" data-percentage={Math.ceil(employeeCovered.noRisk.noRiskPercentage / 10) * 10}>
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
                                    <h6>{employeeCovered.noRisk.noRiskPercentage}%</h6>
                                </div>
                            </div>
                        </div>
                        <p onClick={() => riskType('no')} className={type === 'no' ? 'active' : ''}> No Risk Employees</p>
                    </div>}

                </div>
            </div>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <div className="header-title">
                        <h4 className="card-title">{type === 'high' ? 'High Risk Employees Profile' : type === 'medium' ? 'Medium Risk Employees Profile' : 'No Risk Employees Profile'}</h4>
                    </div>
                </div>
                <div className="card-body">
                    <div className="">
                        {employees.length !== 0 && <table id="user-list-table" className="table table-striped" role="grid" aria-describedby="user-list-page-info">
                            <thead>
                                <tr className="border-0">
                                    <th>Emp Id</th>
                                    <th>Name</th>
                                    <th>Pulse</th>
                                    <th>Critical</th>
                                    <th>Band</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map(employee => (<tr>
                                        <td>{employee.id}</td>
                                        <td>{employee.id}****</td>
                                        <td>{employee.pulse}</td>
                                        <td>{employee.critical}</td>
                                        <td>{employee.band}</td>
                                        <td>{employee.location}</td>
                                    </tr>))
                                }
                            </tbody>
                        </table>}
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}