import React, { useEffect, useState } from 'react'
import './style.css'

let totalRating = 0
export default (props) => {
    // const { pulseScore } = props
    const pulseScore = [{
        rating_type: 'Strongly disagree',
        rating_count: 6
    }, {
        rating_type: 'Disagree',
        rating_count: 26
    }, {
        rating_type: 'Somewhat disagree',
        rating_count: 36
    }, {
        rating_type: 'Somewhat agree',
        rating_count: 18
    }, {
        rating_type: 'Agree',
        rating_count: 45
    }, {
        rating_type: 'Strongly agree',
        rating_count: 38
    }
    ]
    const getClass = rating_type => {
        return 'pulseCard ' + rating_type.replace(/ /g, "-").toLowerCase()
    }
    const getHeight = rating_count => {
        return 50 + (rating_count / totalRating) * 200
    }
    useEffect(() => {
        pulseScore.map(item => {
            totalRating = totalRating + item.rating_count
        })
    }, [])
    return (
        <div className="card">
            <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                    <h6 className="card-title">Employee Pulse Score({totalRating} Associates)
                    </h6>
                </div>
            </div>
            <div className="card-body">
                <div className="row">
                    {
                        pulseScore.map((item, i) => (
                            <div className="col-md-2 col-lg-2">
                                <div className={getClass(item.rating_type)}>
                                    <span className='emonji'></span>
                                    <span className='wave' style={{ height: getHeight(item.rating_count) }}></span>
                                </div>
                                <div className="pulseText">
                                    <h3 className='counter'>{item.rating_count}</h3>
                                    <span className='mood'>{item.rating_type}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}