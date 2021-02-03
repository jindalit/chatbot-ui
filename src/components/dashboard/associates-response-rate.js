import React, { useEffect, useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="label">{label}</p>
                <p className="intro">{`Positive responses: ${payload[0].payload.Positive} Employees`}</p>
                <p className="desc">{`Negative responses: ${payload[0].payload.Negative} Employees`}</p>
            </div>
        );
    }

    return null;
};
let datanew = []
export default (props) => {
    const { assaciatesResponse } = props
    const [data, setData] = useState([])
    useEffect(() => {
        if (assaciatesResponse) {
            datanew = []
            for (var key in assaciatesResponse) {
                datanew.push(
                    {
                        name: key,
                        Positive: assaciatesResponse[key]['positive'],
                        Negative: assaciatesResponse[key]['negative']
                    }
                )

            }
            setData(datanew)
        }
    }, [assaciatesResponse])
    return (

        <div className="card" style={{ float: 'left', width: '100%', height: '400px', backgroundColor: '#ffffff' }}>
            <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                    <h6 className="card-title">Associates Response Rate
                </h6>
                </div>
            </div>
            {data.length !== 0 &&
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
                    <XAxis dataKey="name" interval={0} textAnchor="end" angle={-7}></XAxis>
                    <YAxis interval={0} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                        stackId='0'
                        type="monotone"
                        dataKey="Negative"
                        stroke="#FFC100"
                        strokeWidth="1"
                        fillOpacity="1"
                        fill="url(#MyGradient)"
                        dot
                    />
                    <Area
                        stackId='0'
                        type="monotone"
                        dataKey="Positive"
                        stroke="#5DFF0080"
                        strokeWidth="1"
                        fillOpacity="1"
                        fill="url(#MyGradient2)"
                        dot
                    />

                </AreaChart>
                </ResponsiveContainer>
            }
        </div>)
}