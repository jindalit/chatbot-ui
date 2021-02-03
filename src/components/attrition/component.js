import React, { useState, useEffect } from 'react'
import SideNav from '../common/sideNav'
import Header from '../common/header'
/* import Filters from '../common/filter-section' */
import PanEnterprise from './pan-enterprise'
import Demographics from './demographics'
import EmployeeLevel from './employee-level'

export default (props) => {
    useEffect(() => {
        props.initLoadData({ Technology: '', Location: '', Department: '' })
    }, [])
    const filterData = data => {
        props.initLoadData(data)
    }
    return (<div className="wrapper" >
        <SideNav nav='chat' />
        <Header />
        <div className="content-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="d-flex justify-content-between px-3 py-0 m-1" style={{ width: '100%' }}>
                        <h4>Attrition Predictor -Summary</h4>
                        {/* <Filters filterData={filterData} /> */}
                    </div>
                    <div className="card card-body pb-0">
                        <div className="d-flex justify-content-between align-items-center" id="NavLinks-Attrition">
                            <div className="todo-date d-flex">

                                <ul className="nav nav-tabs mb-0" id="myTab-1" role="tablist">
                                    <li className="nav-item align-self-end">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                                            Fight Risk: Pan Enterprise
                  </a>
                                    </li>
                                    <li className="nav-item align-self-end">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#Demographics" role="tab" aria-controls="profile" aria-selected="false">
                                            Fight Risk: Demographics
                  </a>
                                    </li>
                                    <li className="nav-item align-self-end">
                                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#EmployeeLevel" role="tab" aria-controls="contact" aria-selected="false">
                                            Fight Risk: Employee Level
                  </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid NavLinks-Attrition-Pages tab-content" id="myTabContent-2">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <PanEnterprise employeeRisk={props.getEmployeeRisk} />
                    </div>
                    <div class="tab-pane fade" id='Demographics' role="tabpanel" aria-labelledby="Demographics-tab">
                        <Demographics employeeRisk={props.getCriticalEmployee} businessUnit={props.getBusinessUnit} highFlightRisk={props.gradeWise} />
                    </div>
                    <div class="tab-pane fade" id='EmployeeLevel' role="tabpanel" aria-labelledby="EmployeeLevel-tab">
                        <EmployeeLevel employeeCovered={props.getEmployeeCovered} />
                    </div>
                </div>
            </div>
        </div>
    </div>)
}