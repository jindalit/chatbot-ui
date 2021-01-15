import React, { useState } from 'react'
import {
    PieChart, Pie, Cell, Label, Tooltip
} from 'recharts';


const data01 = [
    { name: 'Group A', value: 400, v: 89 },
    { name: 'Group B', value: 150, v: 100 }
];
const renderLabelContent = (props) => {
    const { value, x, y, midAngle } = props;

    return (
        <g transform={`translate(${x}, ${y})`} textAnchor={(midAngle < -90 || midAngle >= 90) ? 'end' : 'start'}>
            <text x={0} y={0}>{`Count: ${value}`}</text>
        </g>
    );
};
const colors = ['#D80000', '#FF9800']
export default (props) => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="card">
            <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                    <h6 className="card-title">Overall Company View
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
                <span class="newset">&bull; Quality Of Work</span>
                <span class="newset">&bull; Team</span>
                <span class="newset">&bull; Leadership</span>
                <span class="newset">&bull; Manager</span>
                <span class="newset">&bull; Career Development</span>
            </div>
        </div >
    )
}