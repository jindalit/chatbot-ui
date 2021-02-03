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
    'decisionMaking': 'DecisionMaking',
    'employeeRole': 'EmployeeRole',
    'leadership': 'Leadership',
    'manager': 'Manager',
    'performanceManagement': 'PerformanceManagement',
    'processPolicy': 'ProcessPolicy',
    'teamWork': 'TeamWork'
}
let data = []

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="label">{label}</p>
                <p className="intro">{`Strongly Disengaged: ${payload[0].payload.stronglyDisengage} Employees`}</p>
                <p className="desc">{`Disengaged: ${payload[0].payload.disengage} Employees`}</p>
                <p className="desc">{`Somewhat Disengaged: ${payload[0].payload.somewhatDisengage} Employees`}</p>
                <p className="desc">{`Somewhat Engaged: ${payload[0].payload.somewhatEngage} Employees`}</p>
                <p className="desc">{`Engaged: ${payload[0].payload.Engage} Employees`}</p>
                <p className="desc">{`Strongly Engaged: ${payload[0].payload.stronglyEngage} Employees`}</p>
            </div>
        );
    }

    return null;
};
export default (props) => {
    const [pulseData, setPulseData] = useState([])
    const [type, setType] = useState('Employee Experience View')
    const [leftMargin, setLeftMargin] = useState(170)
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
            setLeftMargin(170)
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
                        <Bar stackId="0" dataKey="stronglyDisengage" maxBarSize={20} fill="#D80000" radius={[10, 0, 0, 10]} />
                        <Bar stackId="0" dataKey="disengage" maxBarSize={20} fill="#FF5607" />
                        <Bar dataKey="somewhatDisengage" stackId='0' maxBarSize={20} fill="#FF9800" />
                        <Bar stackId="0" dataKey="somewhatEngage" maxBarSize={20} fill="#FFC100" />
                        <Bar stackId="0" dataKey="Engage" maxBarSize={20} fill="#c5d647" />
                        <Bar stackId="0" dataKey="stronglyEngage" maxBarSize={20} fill="#79c267" radius={[0, 10, 10, 0]} />
                    </BarChart >
                </ResponsiveContainer>
            }
        </div>
    )
}