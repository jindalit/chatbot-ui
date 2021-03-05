import React, { useState } from 'react'
import {
    PieChart, Pie, Cell, Label, Tooltip
} from 'recharts';


const data01 = [
    { name: 'Group A', value: 400, v: 89 },
    { name: 'Group B', value: 150, v: 100 }
];
const colors = ['#D80000', '#FF9800']
const getClassName = ratingName => {
    const name = ratingName ? ratingName.toLowerCase() : ratingName
    return name === 'somewhat disagree' ? 'somewhatdisagree' : name === 'disagree' ? 'disagree' : name === 'strongly disagree' ? 'stronglydisagree' : name === 'somewhat agree' ? 'somewhatagree' : name === 'agree' ? 'agree' : 'stronglyagree'
}
export default (props) => {

    return (
        <div className="card" style={{ minHeight: '378px' }}>
            <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                    <h6 className="card-title">Overall Company View
                    </h6>
                </div>
            </div>
            <span className='clickhere'>Click here to view</span>
            <div className="card-body">

                <div className="lgf-progress" data-percentage={props.companyMood && Math.ceil((props.companyMood.overAllMood * 10) / 10) * 10}>
                    <span className="lgf-progress-left">
                        <span className="lgf-progress-bar lgf-progress--orange"></span>
                    </span>
                    <span className="lgf-progress-right">
                        <span className="lgf-progress-bar lgf-progress--orange"></span>
                    </span>
                    <div className="lgf-progress-value">
                        {props.companyMood && <div className="lgf-progress-text">
                            <h4>{props.companyMood.overAllMood}<i className='ri-heart-3-fill'></i></h4>
                            <div className={getClassName(props.companyMood.ratingName)}>
                                <span className='emonji'></span>
                            </div>
                        </div>
                        }
                    </div>
                </div>
                <h6>Employee Engagement Score</h6>
            </div>
        </div >
    )
}