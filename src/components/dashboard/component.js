import { prop } from 'lodash/fp'
import React, { useEffect } from 'react'
import SideNav from '../common/sideNav'
import Header from '../common/header'
import Filters from './filter-section'
import EmployeePulse from './employee-pulse'
import CompanyMood from './company-mood'
import FlightRiskAnalysis from './flight-risk-analysis'
import UnitPulse from './unit-pulse-view'
import AssociatesResponseRate from './associates-response-rate'
import WordCloud from './world-cloud'
import EmployeeView from './employee-view'
import GenderView from './gender-wise'

export default (props) => {
    useEffect(() => {
        props.initLoadData()
    }, [])

    return (
        <div className="wrapper" >
            <SideNav nav='dashboard' />
            <Header />
            <div className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <Filters />
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-lg-8 pr-1">
                            <EmployeePulse pulseScore={props.pulseScore} />
                        </div>
                        <div className="col-sm-6 col-lg-2 pr-1 pl-1">
                            <CompanyMood />
                        </div>
                        <div className="col-sm-6 col-lg-2 pr-1 pl-1">
                            <FlightRiskAnalysis />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 pr-1">
                            <AssociatesResponseRate />
                        </div>
                        <div className="col-sm-12 col-lg-6 pr-1">
                            <UnitPulse />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6 col-lg-3 pr-1'>
                            <GenderView />
                        </div>
                        <div className='col-sm-6 col-lg-6 pr-1'>
                            <EmployeeView />
                        </div>
                        <div className='col-sm-6 col-lg-3 pr-1'>
                            <WordCloud />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}