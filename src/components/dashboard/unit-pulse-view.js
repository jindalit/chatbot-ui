import React, { useEffect, useState } from 'react'
import {
    BarChart, Bar,
    XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';


let data = []
export default (props) => {
    const [pulseData, setPulseData] = useState([])
    const [type, setType] = useState('Unit Pulses View')
    const [leftMargin, setLeftMargin] = useState(20)
    useEffect(() => {
        const { unitPulse } = props
        data = []
        for (var key in unitPulse) {
            if (key !== 'totalAssociates' && key !== 'totalBusinesUnit') {
                data.push({ ...unitPulse[key], name: key })
            }
        }
        setPulseData(data)

    }, [props.unitPulse])

    useEffect(() => {
        const { employeeExperienceView } = props
        data = []
        for (var key in employeeExperienceView) {
            if (key !== 'totalAssociates' && key !== 'totalBusinesUnit') {
                data.push({ ...employeeExperienceView[key], name: key })
            }
        }
        setPulseData(data)
    }, [props.employeeExperienceView])
    const changeType = e => {
        setType(e.target.value)
        if (e.target.value === 'Unit Pulses View') {
            setLeftMargin(20)
            props.updatePulseType('unitPulseView')
        } else {
            setLeftMargin(180)
            props.updatePulseType('EmployeeExperienceView')
        }
    }
    return (
        <div className="card" style={{ float: 'left', width: '100%', height: '400px', backgroundColor: '#ffffff' }}>
            <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                    <h6 className="card-title">{type}</h6>
                </div>
                <div>
                    <select className='form-control' onChange={e => changeType(e)}>
                        <option>Unit Pulses View</option>
                        <option>Employee Experiance View</option>
                    </select>
                </div>
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

                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" minTickGap={1} tickLine={false} axisLine={false} />
                        <Tooltip />
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