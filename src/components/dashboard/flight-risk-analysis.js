import React, { useState, useEffect } from 'react'
import {
    PieChart, Pie, Cell, Label, Tooltip
} from 'recharts';


let datanew = []
const colors = ['#D80000', '#FF9800', '#79c267']
export default (props) => {
    const { flightRisk } = props
    const [data, setData] = useState([])
    useEffect(() => {
        if (flightRisk) {
            datanew = []
            for (var key in flightRisk) {
                if (key !== 'associates') {
                    datanew.push(
                        {
                            name: key.toUpperCase(),
                            value: flightRisk[key]
                        })
                }
            }
            setData(datanew)
        }
    }, [flightRisk])
    return (
        <div className="card">
            <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                    <h6 className="card-title">Flight Risk Analysis View
                    </h6>
                </div>
            </div>
            {data.length !== 0 &&
                <div className="card-body">
                    <PieChart width={160} height={160}>
                        <Pie
                            data={data}
                            dataKey="value"
                            startAngle={110}
                            endAngle={-250}
                            innerRadius={60}
                            outerRadius={80}
                            isAnimationActive={true}
                        >
                            {
                                data.map((entry, index) => (
                                    <Cell key={`slice-${index}`} fill={colors[index]} />
                                ))
                            }
                            <Label width={50} position="center" style={{ fontWeight: 'bold', fontSize: '1.5em', }}>
                                {data[0].value}
                            </Label>
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </div>
            }
            {data.length !== 0 &&
                <div class="progress-value">
                    <span class="newset"><span style={{ color: colors[0] }}>{data[0].value}</span><span style={{ color: colors[0] }}><br /> High Risk</span></span>
                    <span class="newset"><span style={{ color: colors[1] }}>{data[1].value}</span> <span style={{ color: colors[1] }}><br /> Medium Risk</span></span>
                    <span class="newset"><span style={{ color: colors[2] }}>{data[2].value}</span>  <span style={{ color: colors[2] }}><br />No Risk</span></span>
                </div>
            }
        </div >
    )
}