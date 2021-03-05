import React, { useEffect, useState } from 'react'
import {
    BarChart, Bar,
    XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

const unitName = {
    'buA': 'BFSI',
    'buB': 'Manufacturing',
    'buC': 'Energy',
    'buD': 'Life Sciences'
}
const empName = {
    career: 'Career',
    culture: 'Culture',
    'customer': 'Customer',
    'decisionMaking': 'Decision-Making',
    'employeeRole': 'Role',
    'leadership': 'Leadership',
    'manager': 'Manager',
    'performanceManagement': 'Performance-Management',
    'processPolicy': 'Process-Policy',
    'teamWork': 'Team-Work'
}
let data = []

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="label">{label}</p>
                <p className="intro">{`Strongly Disengaged: ${payload[0].payload.stronglyDisengageEmployee} Employees`}</p>
                <p className="desc">{`Disengaged: ${payload[0].payload.disengageEmployee} Employees`}</p>
                <p className="desc">{`Somewhat Disengaged: ${payload[0].payload.somewhatDisengageEmployee} Employees`}</p>
                <p className="desc">{`Somewhat Engaged: ${payload[0].payload.somewhatEngageEmployee} Employees`}</p>
                <p className="desc">{`Engaged: ${payload[0].payload.engageEmployee} Employees`}</p>
                <p className="desc">{`Strongly Engaged: ${payload[0].payload.stronglyEngageEmployee} Employees`}</p>
            </div>
        );
    }

    return null;
};
export default (props) => {
    const [pulseData, setPulseData] = useState([])
    const [type, setType] = useState('Employee Engagement Drivers')
    const [leftMargin, setLeftMargin] = useState(130)
    useEffect(() => {
        const { unitPulse } = props
        data = []
        for (var key in unitPulse) {
            if (key !== 'totalAssociates' && key !== 'totalBusinesUnit') {
                data.push({ ...unitPulse[key], name: unitName[key] })
            }
        }
        setPulseData(data)

    }, [props.unitPulse])

    useEffect(() => {
        const { employeeExperienceView } = props
        data = []
        for (var key in employeeExperienceView) {
            if (key !== 'totalAssociates' && key !== 'totalBusinesUnit') {
                data.push({ ...employeeExperienceView[key], name: empName[key] })
            }
        }
        setPulseData(data)
    }, [props.employeeExperienceView])
    const changeType = e => {
        setType(e.target.value)
        if (e.target.value === 'Unit Pulse View') {
            setLeftMargin(70)
            props.updatePulseType('unitPulseView')
        } else {
            setLeftMargin(130)
            props.updatePulseType('EmployeeExperienceView')
        }
    }
    return (
        <div className="card" style={{ float: 'left', width: '100%', height: '400px', backgroundColor: '#ffffff' }}>
            <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                    <h6 className="card-title">{type}</h6>
                </div>
                {/* <div>
                    <select className='form-control' onChange={e => changeType(e)}>
                        <option>Unit Pulse View</option>
                        <option>Employee Experience View</option>
                    </select>
                </div> */}
            </div>
            <span className='clickhere'>Click here to view</span>
            {data.length !== 0 &&
                <ResponsiveContainer>
                    <BarChart
                        className='barChart'
                        height={400}
                        data={pulseData}
                        margin={{ top: 20, right: 20, bottom: 20, left: leftMargin }}
                        layout="vertical"
                    >

                        <XAxis type="number" interval={0} />
                        <YAxis dataKey="name" interval={0} type="category" />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar stackId="0" dataKey="stronglyDisengageEmployee" maxBarSize={20} fill="#D80000" radius={[10, 0, 0, 10]} />
                        <Bar stackId="0" dataKey="disengageEmployee" maxBarSize={20} fill="#FF5607" />
                        <Bar dataKey="somewhatDisengageEmployee" stackId='0' maxBarSize={20} fill="#FF9800" />
                        <Bar stackId="0" dataKey="somewhatEngageEmployee" maxBarSize={20} fill="#FFC100" />
                        <Bar stackId="0" dataKey="engageEmployee" maxBarSize={20} fill="#c5d647" />
                        <Bar stackId="0" dataKey="stronglyEngageEmployee" maxBarSize={20} fill="#79c267" radius={[0, 10, 10, 0]} />
                    </BarChart >
                </ResponsiveContainer>
            }
        </div>
    )
}