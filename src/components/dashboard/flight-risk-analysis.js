import React, { useState } from 'react'
import {
    PieChart, Pie, Cell, Label, Tooltip
} from 'recharts';


const data01 = [
    { name: 'No Risk', value: 70, v: 100 },
    { name: 'Medium Risk', value: 50, v: 100 },
    { name: 'High Risk', value: 15, v: 89 },
];
const renderLabelContent = (props) => {
    const { value, x, y, midAngle } = props;

    return (
        <g transform={`translate(${x}, ${y})`} textAnchor={(midAngle < -90 || midAngle >= 90) ? 'end' : 'start'}>
            <text x={0} y={0}>{`Count: ${value}`}</text>
        </g>
    );
};
const colors = ['#79c267', '#D80000', '#FF9800']
export default (props) => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="card">
            <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                    <h6 className="card-title">Flight Risk Analysis View
                    </h6>
                </div>
            </div>
            <div className="card-body">
                <PieChart width={160} height={160}>
                    <Pie
                        data={data01}
                        dataKey="value"
                        startAngle={110}
                        endAngle={-250}
                        innerRadius={60}
                        outerRadius={80}
                        isAnimationActive={true}
                    >
                        {
                            data01.map((entry, index) => (
                                <Cell key={`slice-${index}`} fill={colors[index]} />
                            ))
                        }
                        <Label width={50} position="center" style={{ fontWeight: 'bold', fontSize: '1.4em' }}>
                            4.2
                        </Label>
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>
            <div class="progress-value">
                <span class="newset">15 <br /> High Risk</span>
                <span class="newset">50 <br /> Medium Risk</span>
                <span class="newset">70 <br /> No Risk</span>
            </div>
        </div >
    )
}