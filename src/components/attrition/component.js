import React, { useState, useEffect } from 'react'
import SideNav from '../common/sideNav'
import Header from '../common/header'
import Filters from './filter-section'
import PanEnterprise from './pan-enterprise'
import Demographics from './demographics'
import EmployeeLevel from './employee-level'

export default (props) => {
    useEffect(() => {
        props.employeeRisk()
        props.businessUnit()
        props.highFlightRisk()
    }, [])

    return (<div className="wrapper" >
        <SideNav nav='chat' />
        <Header />
        <div className="content-page">
            <div className="container-fluid">
                <div className="row">
                    <Filters />
                </div>
                <div class="container-fluid NavLinks-Attrition-Pages tab-content" id="myTabContent-2">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <PanEnterprise />
                    </div>
                    <div class="tab-pane fade" id='Demographics' role="tabpanel" aria-labelledby="Demographics-tab">
                        <Demographics employeeRisk={props.getEmployeeRisk} businessUnit={props.getBusinessUnit} highFlightRisk={props.getHighFlightRisk} />
                    </div>
                    <div class="tab-pane fade" id='EmployeeLevel' role="tabpanel" aria-labelledby="EmployeeLevel-tab">
                        <EmployeeLevel />
                    </div>
                </div>
            </div>
        </div>
    </div>)
}