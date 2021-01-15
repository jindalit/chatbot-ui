import React from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    { name: 'Delhi', uv: 4000, pv: 2400, amt: 2400, time: 1 },
    { name: 'Banglore', uv: 3000, pv: 1398, amt: 2210, time: 3 },
    { name: 'Pune', uv: 2000, pv: 800, amt: 2290, time: 9 },
    { name: 'Kolkatta', uv: 2780, pv: 3908, amt: 2000, time: 10 },
    { name: 'Mumbai', uv: 2500, pv: 4800, amt: 2181, time: 12 },
    { name: 'Chennai', uv: 1220, pv: 3800, amt: 2500, time: 16 },
    { name: 'Hyderabad', uv: 2300, pv: 4300, amt: 2100, time: 18 },
];
export default () => {
    return (

        <div className="card" style={{ float: 'left', width: '100%', height: '400px', backgroundColor: '#ffffff' }}>
            <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                    <h6 className="card-title">Associates Response Rate
                </h6>
                </div>
            </div>
            <ResponsiveContainer><AreaChart data={data}
                margin={{ top: 20, right: 80, left: 20, bottom: 5 }}
            >
                <defs>
                    <linearGradient id="MyGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="rgba(255, 193, 0, 0.8)" />
                        <stop offset="95%" stopColor="rgba(255, 193, 0, 0)" />
                    </linearGradient>
                </defs>
                <defs>
                    <linearGradient id="MyGradient2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="rgba(93, 255, 0, 0.8)" />
                        <stop offset="95%" stopColor="rgba(93, 255, 0, 0)" />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" minTickGap={1} ></XAxis>
                <YAxis minTickGap={1} interval={1} />
                <Tooltip />
                <Area
                    stackId='0'
                    type="monotone"
                    dataKey="uv"
                    stroke="#FFC100"
                    strokeWidth="1"
                    fillOpacity="1"
                    fill="url(#MyGradient)"
                    dot
                />
                <Area
                    stackId='0'
                    type="monotone"
                    dataKey="pv"
                    stroke="#5DFF0080"
                    strokeWidth="1"
                    fillOpacity="1"
                    fill="url(#MyGradient2)"
                    dot
                />
            </AreaChart>
            </ResponsiveContainer></div>)
}