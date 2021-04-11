import { getByText } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import './style.css'

let totalRating = 0
const pulseName = {
    StronglyDisagreeCount: 'Strongly Disengaged',
    DisagreeCount: 'Disengaged',
    SomewhatDisagreeCount: 'Somewhat Disengaged',
    SomewhatAgreeCount: 'Somewhat Engaged',
    AgreeCount: 'Engaged',
    StronglyAgreeCount: 'Strongly Engaged'
}
export default (props) => {
    const { pulseScore } = props
    const [totalScore, setTotalScore] = useState(0)
    const [pulseHtml, setPulseHtml] = useState(<div></div>)
    const getClass = rating_type => {
        return 'pulseCard ' + rating_type.replace(/Count/g, "").toLowerCase()
    }
    const getHeight = rating_count => {
        return 50 + (rating_count / totalRating) * 150
    }
    useEffect(() => {
        if (pulseScore) {
            const scoreView = pulseScore.companyPulseScoreView
            let html = []
            totalRating = 0
            for (var key in scoreView) {
                totalRating = totalRating + scoreView[key]

            }
            setTotalScore(totalRating)
            setTimeout(function () {
                for (var key in scoreView) {
                    html.push(
                        <div className="col-md-2 col-lg-2">
                            <div className={getClass(key)}>
                                <span className='emonji'></span>
                                <span className='wave' style={{ height: getHeight(scoreView[key]) }}></span>
                            </div>
                            <div className="pulseText">
                                <h3 className='counter'>{scoreView[key]}</h3>
                                <span className='mood'>Associates<br />{pulseName[key]}</span>
                            </div>
                        </div>
                    )
                }
                setPulseHtml(html)
            }, 0)
        }
    }, [pulseScore])

    return (
        <div className="card">
            <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                    <h6 className="card-title">Employee Pulse Score({totalScore} Associates)
                    </h6>
                </div>
            </div>
            <div className="card-body">
                <div className="row">
                    {pulseHtml}
                </div>
            </div>
        </div>
    )
}