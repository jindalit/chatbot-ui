import React from 'react'
import ReactWordcloud from 'react-wordcloud';


const words = [{
    text: 'told',
    value: 64,
},
{
    text: 'mistake',
    value: 11,
},
{
    text: 'thought',
    value: 16,
},
{
    text: 'bad',
    value: 17,
},
{
    text: 'correct',
    value: 10,
},
{
    text: 'day',
    value: 54,
},
{
    text: 'prescription',
    value: 12,
},
{
    text: 'time',
    value: 77,
},
{
    text: 'thing',
    value: 45,
},
{
    text: 'left',
    value: 19,
},
{
    text: 'pay',
    value: 13,
},
{
    text: 'people',
    value: 32,
},
{
    text: 'month',
    value: 22,
},
{
    text: 'again',
    value: 35,
},
{
    text: 'review',
    value: 24,
},
{
    text: 'call',
    value: 38,
},
{
    text: 'doctor',
    value: 70,
},
{
    text: 'asked',
    value: 26,
},
{
    text: 'finally',
    value: 14,
},
{
    text: 'insurance',
    value: 29,
},
{
    text: 'week',
    value: 41,
},
{
    text: 'called',
    value: 49,
},
{
    text: 'problem',
    value: 20,
},
{
    text: 'going',
    value: 59,
},
{
    text: 'help',
    value: 49,
},
{
    text: 'felt',
    value: 45,
},
{
    text: 'discomfort',
    value: 11,
},
{
    text: 'lower',
    value: 22,
},
{
    text: 'severe',
    value: 12,
},
{
    text: 'free',
    value: 38,
},
{
    text: 'better',
    value: 54,
},
{
    text: 'muscle',
    value: 14,
},
{
    text: 'neck',
    value: 41,
},
{
    text: 'root',
    value: 24,
},
{
    text: 'adjustment',
    value: 16,
},
{
    text: 'therapy',
    value: 29,
},
{
    text: 'injury',
    value: 20,
},
{
    text: 'excruciating',
    value: 10,
},
{
    text: 'chronic',
    value: 13,
}
];
const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [5, 60],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
};
export default () => {
    return (
        <div className="card" style={{ float: 'left', width: '100%', height: '400px', backgroundColor: '#ffffff' }}>
            <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                    <h6 className="card-title">Employee Speak
            </h6>
                </div>
            </div>
            <div style={{ float: 'left', width: '100%', height: '350px' }}>
                <ReactWordcloud options={options} words={words} /></div>
        </div>
    )
}