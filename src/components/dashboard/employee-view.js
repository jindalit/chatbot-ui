import React, { useEffect } from 'react'
import {
    BarChart, Bar,
    XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';


const pageData = [
    { name: 'BU A', stronglyDisagree: 30, disagree: 260, someWhatDisagree: 34, someWhatAgree: 76, agree: 100, stronglyAgree: 120 },
    { name: 'BU B', stronglyDisagree: 20, disagree: 290, someWhatDisagree: 134, someWhatAgree: 26, agree: 20, stronglyAgree: 140 },
    { name: 'BU C', stronglyDisagree: 38, disagree: 100, someWhatDisagree: 234, someWhatAgree: 96, agree: 180, stronglyAgree: 110 },
    { name: 'BU D', stronglyDisagree: 60, disagree: 190, someWhatDisagree: 48, someWhatAgree: 216, agree: 60, stronglyAgree: 190 },
    { name: 'BU E', stronglyDisagree: 30, disagree: 290, someWhatDisagree: 454, someWhatAgree: 196, agree: 90, stronglyAgree: 126 },
    { name: 'BU F', stronglyDisagree: 90, disagree: 220, someWhatDisagree: 344, someWhatAgree: 276, agree: 120, stronglyAgree: 220 },
    { name: 'BU G', stronglyDisagree: 130, disagree: 26, someWhatDisagree: 114, someWhatAgree: 176, agree: 105, stronglyAgree: 10 },
];
export default (props) => {
    useEffect(() => {

    })
    return (
        <div className="card" style={{ float: 'left', width: '100%', height: '400px', backgroundColor: '#ffffff' }}>
            <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                    <h6 className="card-title">Employee Experience View
                    </h6>
                </div>
            </div>
            <ResponsiveContainer>
                <BarChart
                    className='barChart'
                    height={400}
                    data={pageData}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    layout="vertical"
                >

                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" minTickGap={1} tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Bar stackId="0" dataKey="stronglyDisagree" maxBarSize={20} fill="#D80000" radius={[10, 0, 0, 10]} />
                    <Bar stackId="0" dataKey="disagree" maxBarSize={20} fill="#FF5607" />
                    <Bar dataKey="someWhatDisagree" stackId='0' maxBarSize={20} fill="#FF9800" />
                    <Bar stackId="0" dataKey="someWhatAgree" maxBarSize={20} fill="#FFC100" />
                    <Bar stackId="0" dataKey="agree" maxBarSize={20} fill="#c5d647" />
                    <Bar stackId="0" dataKey="stronglyAgree" maxBarSize={20} fill="#79c267" radius={[0, 10, 10, 0]} />
                </BarChart >
            </ResponsiveContainer>
        </div>
    )
}