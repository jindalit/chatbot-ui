import React, { useEffect, useState } from 'react'
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LabelList
} from 'recharts';
const colors = ['rgba(254, 114, 28, 0.85)', 'rgba(255, 202, 68, 0.85)', 'rgba(0, 54, 150, 0.85)', '#D80000', '#FF9800', '#79c267']

const renderCustomizedLabel = (props) => {
    const {
        x, y, width, height, value,
    } = props;

    const offset = 50;
    const offset2 = 20;
    return (
        <React.Fragment>
            <text x={x + width - offset} y={y + height - 25} fill={"#fff"} textAnchor="end">
                {value}
            </text>
            <text x={x + width - offset2} y={y + height - 5} fill={"#fff"} textAnchor="end">
                Employees
        </text>
        </React.Fragment>
    );
};

const renderCustomizedLabel2 = (props) => {
    const {
        x, y, width, height, value,
    } = props;

    const offset = 15;
    return (
        <React.Fragment>
            <text x={x + width - offset} y={y + height - 25} fill={"#fff"} textAnchor="end">
                {value}%
            </text>
        </React.Fragment>
    );
};

const unitName = {
    'percenteOfBusinesUnit1': 'BFSI',
    'percenteOfBusinesUnit2': 'Manufacturing',
    'percenteOfBusinesUnit3': 'Energy',
    'percenteOfBusinesUnit4': 'Life Sciences'
}
const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="label">{label}</p>
                <p className="red">{`${payload[0].payload.value}% Employees`}</p>
            </div>
        );
    }

    return null;
};

const CustomTooltip2 = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="label">{label}</p>
                <p className="red">{`${payload[0].payload.total} Employees`}</p>
            </div>
        );
    }

    return null;
};
let datanew = []
let dataGrade = []
export default (props) => {
    const { employeeRisk, highFlightRisk, businessUnit } = props
    const [data, setData] = useState([])
    const [gradeData, setGradeData] = useState([])
    useEffect(() => {
        if (businessUnit) {
            datanew = []
            for (var key in businessUnit) {
                if (key !== 'totalHighRiskAssociates') {
                    datanew.push(
                        {
                            name: unitName[key],
                            value: businessUnit[key]
                        })
                }
            }
            setData(datanew)
        }
    }, [businessUnit])

    useEffect(() => {
        if (highFlightRisk) {
            dataGrade = []
            for (var key in highFlightRisk) {
                dataGrade.push(
                    {
                        name: key,
                        percente: highFlightRisk[key].percente,
                        total: highFlightRisk[key].totalHighRiskEmployee
                    })
            }
            setGradeData(dataGrade)
        }
    }, [highFlightRisk])

    return (
        <div className="card card-body">
            <div className="row">


                <div className="card card-body">
                    <div className="row">
                        <div className="col-4 h-100">
                            {highFlightRisk &&
                                <div className="card">
                                    <div className="card-header text-center pt-1 pb-2">
                                        <div className="header-title">
                                            <h4 className="card-title">Grade Wise High Flight Risk</h4>
                                        </div>
                                    </div>
                                    <div className="card-body d-flex h-100 text-center px-4 pt-3 pb-1">
                                        <BarChart width={320} height={250} data={gradeData}
                                            margin={{ top: 0, right: 0, left: -20, bottom: 30 }}>
                                            <XAxis dataKey="name" interval={0} textAnchor="end" angle={-20} />
                                            <YAxis />
                                            <Tooltip content={<CustomTooltip2 />} />
                                            <Bar dataKey="total" fill="#c5d647" barSize={{ height: 26 }} >
                                                <LabelList dataKey="total" content={renderCustomizedLabel} position="insideTop" style={{ fill: "white" }} />
                                            </Bar>
                                        </BarChart>
                                    </div>
                                    <div className="emp-card-text">
                                        <div className="emp-card-description pt-3">
                                            <ul className="px-3">
                                                {gradeData.lenght !== 0 && gradeData.map(item => (
                                                    <li className="d-flex align-items-center pb-3 border-bottom">
                                                        <div className="profile-icon iq-icon-box rounded-small text-center">
                                                            <div className="lgf-progress lgf-progress-small" data-percentage={Math.ceil(item.percente / 10) * 10}>
                                                                <span className="lgf-progress-left">
                                                                    <span className="lgf-progress-bar lgf-progress--blue">
                                                                    </span>
                                                                </span>
                                                                <span className="lgf-progress-right">
                                                                    <span className="lgf-progress-bar lgf-progress--blue">
                                                                    </span>
                                                                </span>
                                                                <div className="lgf-progress-value">
                                                                    <div className="lgf-progress-text">
                                                                        <h6>{item.percente}%</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="emp-loader-text">
                                                            <b>
                                                                {item.percente}% {item.name.toUpperCase()} Employees are at high risk, You need to focus on {item.total} Employees on priority basis.</b>

                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>}
                        </div>
                        <div className="col-4 h-100">

                            <div className="card">
                                <div className="card-header text-center pt-1 pb-2">
                                    <div className="header-title">
                                        <h4 className="card-title">Business Unit High Flight Risk</h4>
                                    </div>
                                </div>

                                <div className="card-body" style={{ height: "300px" }}>

                                    <BarChart width={320} height={250} data={data}
                                        margin={{ top: 0, right: 0, left: -20, bottom: 30 }}>
                                        <XAxis dataKey="name" interval={0} textAnchor="end" angle={-20} />
                                        <YAxis />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Bar dataKey="value" fill="#8884d8">
                                            <LabelList dataKey="value" content={renderCustomizedLabel2} position="insideTop" style={{ fill: "white" }} />
                                        </Bar>
                                    </BarChart>
                                </div>

                                {/* <div className="business-unit-text py-3 px-3">
                                    <div className="d-flex justify-content-center px-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 105 101.656">

                                            <g transform="translate(-1041 -519)">
                                                <circle className="a" cx="5.623" cy="5.623" r="5.623" transform="translate(1087.619 557.8)"></circle>
                                                <circle className="b" cx="5.623" cy="5.623" r="5.623" transform="translate(1064.212 557.8)"></circle>
                                                <circle className="b" cx="5.623" cy="5.623" r="5.623" transform="translate(1111.546 559.127)"></circle>
                                                <circle className="a" cx="5.623" cy="5.623" r="5.623" transform="translate(1051.468 579.656)"></circle>
                                                <circle className="c" cx="5.623" cy="5.623" r="5.623" transform="translate(1076.953 581.796)"></circle>
                                                <path className="c" d="M31.5,50.486c-.046-.863-.245-12.221-.324-17l.189-.172L42.081,23.007l-.767-.542.288-1.1-1.882-1.224-.265,1.015-.321-.225-7.964,6.8-2.408.212-2.6,2.358L24.1,27.826l-3.456.5s-.251.718-.625,1.77c-.1.271-.205.576-.318.893-.023.066-.053.129-.069.2-.109.318-.225.642-.351.989-1.082,3-2.448,6.718-2.679,6.972-.036.043.235.179.638.344l-.344.9,2.1.8.344-.9c.513.189.9.327.9.327l1.247-5.16.03.073c-.179,5-.5,14.255-.533,15.132-.043,1.214-2.927,2.19-2.385,2.983.159.228,1.548.248,3.436.232v.853h3.377v-.886c.354,0,.718,0,1.078,0,.1,0,.205,0,.311,0v.88h3.377v-.8c2.223.05,3.949.04,4.2-.367C35.036,52.4,31.573,51.693,31.5,50.486Z" transform="translate(1079.312 563.794)"></path>
                                                <path className="c" d="M26.65,19.924c-.026-.017-.043-.04-.066-.053a6.321,6.321,0,1,0,.066.053Z" transform="translate(1081.935 560.808)"></path>
                                                <path className="a" d="M38.949,50.8c-.046-.867-.245-12.225-.324-17l10.9-10.485-.761-.542.284-1.1-1.879-1.22L46.9,21.464l-.324-.228-7.961,6.8-2.408.212-2.6,2.358-2.067-2.474-3.45.5s-.351,1.005-.853,2.395c-.043.116-.076.225-.122.344-.023.063-.046.119-.069.185-.073.215-.165.453-.245.685-1.095,3.05-2.53,6.952-2.762,7.21-.036.043.238.175.638.344l-.344.9,2.094.8.347-.9c.516.192.9.327.9.327l1.247-5.16.026.073c-.175,5-.493,14.259-.526,15.135-.043,1.211-2.93,2.19-2.388,2.977.162.232,1.551.251,3.437.232v.86H32.85v-.886h1.082c.1,0,.205.007.3.007v.88h3.377v-.807c2.223.053,3.949.043,4.2-.361C42.478,52.713,39.012,52,38.949,50.8Z" transform="translate(1096.477 564.523)"></path>
                                                <circle className="a" cx="5.623" cy="5.623" r="5.623" transform="translate(1124.286 580.698)"></circle>
                                                <path className="a" d="M21.008,14.754l2.477,1.584-.519.81L21.21,16.021l.258-.4-1.485-.953-.807,1.26,1.485.953.175-.271,1.753,1.125-.321.493.764.49L30.068,7.735,29.3,7.249,28.242,8.913,25.768,7.328l-3.579,3.106Z" transform="translate(1085.249 534.057)"></path>
                                                <path className="c" d="M7.117,14.2l2.567,3.668,2.8-.89.291.916-1.988.632-.146-.456-1.684.533.453,1.426L11.1,19.5l-.1-.308,1.985-.628.179.562.863-.275L10.077,6.419l-.853.275.592,1.882-2.8.893Z" transform="translate(1057.194 532.142)"></path>
                                                <path className="b" d="M15.061,14.718l1.664,1.257-.354.47.721.549L24.957,6.585l-.718-.542-1.2,1.578L20.7,5.851,16.89,8.666l-1.508,4.22,2.345,1.77-.579.767-1.667-1.26.291-.38-1.409-1.065-.9,1.194,1.406,1.065Z" transform="translate(1072.066 530.831)"></path>
                                                <path className="a" d="M28.433,17.5l2.907.433-.142.949-2.061-.308.069-.476-1.743-.258-.228,1.482,1.753.261.043-.321,2.061.308-.083.582.89.132,1.922-12.9-.893-.129L32.634,9.2l-2.9-.43-1.988,4.3Z" transform="translate(1103.847 534.057)"></path>
                                                <path className="a" d="M20.867,10.506l-1.872-.638.946-2.778L16.068,4.357l-4.478-.106-.946,2.785-.906-.311.668-1.975.45.152.569-1.664-1.416-.486L9.443,4.427l.3.1L9.076,6.5l-.559-.189-.288.853,12.35,4.194Z" transform="translate(1059.988 523.682)"></path>
                                                <path className="c" d="M17.7,6.058l.949,1.849-.526.271.417.8L30.133,3.019l-.413-.8-1.756.9L26.62.5,21.97,1.4,18.778,4.54l1.343,2.613-.853.44-.956-1.856.427-.218-.8-1.568L16.6,4.633l.807,1.574Z" transform="translate(1079.309 518.495)"></path>
                                                <path className="b" d="M25.6,9.324l1.558,2.494,4.561-1.273,2.914-3.4L33.08,4.654l.814-.509L35,5.914l-.407.251.929,1.5,1.273-.794-.939-1.495-.271.172-1.1-1.77.5-.311L34.5,2.7,23.439,9.609l.476.764Z" transform="translate(1095.085 523.551)"></path>
                                                <path className="b" d="M44.061,16.255l.288-1.1L42.467,13.93l-.258,1.012-.324-.228-7.964,6.8-2.408.212-2.6,2.358-2.064-2.471-3.453.5s-1.644,4.67-2.844,7.875a6.931,6.931,0,0,1,2.715,3.258l.966-4,.03.069c-.086,2.59-.215,6.3-.331,9.423l5.246-4.478.182-.159.443-1.693,1.492.969L33.18,34.6l.777.5-.235.9-.063.245.04.033.387.271c-.063-3.37-.122-7.042-.155-9.274l10.9-10.481Z" transform="translate(1088.431 549.473)"></path>
                                                <path className="b" d="M30.49,31.732v-.8c.136,0,.268,0,.4.007.354-.976.724-2,1.088-3.03a.838.838,0,0,1-.165-.42c-.026-.407-.076-3.073-.142-6.281l-.261.258-9.8,9.426c.232,0,.476,0,.731-.007v.853h3.377v-.886c.357,0,.724,0,1.085.007h.3v.88l3.38-.007Z" transform="translate(1090.872 566.267)"></path>
                                                <path className="c" d="M29.761,30.731c-.182-.506-.331-.929-.44-1.237-.007-.013-.013-.036-.02-.05-.106-.3-.165-.48-.165-.48l-1.472-.212-1.985-.284-2.061,2.474-2.6-2.365-2.408-.212-7.964-6.8-.321.225-.265-1.015L8.183,22.006l.288,1.1-.767.542L18.6,34.131c-.073,4.769-.278,16.131-.327,17-.066,1.2-3.526,1.912-2.878,3.079.255.41,1.985.417,4.2.364v.8H22.98V54.5h.308c.361-.007.724-.007,1.082-.007v.886h3.377v-.847c1.889.013,3.278-.007,3.436-.238.542-.787-2.342-1.766-2.385-2.977-.033-.883-.354-10.134-.533-15.135l.03-.073,1.247,5.156s.384-.136.9-.324l.344.9,2.1-.8-.344-.9c.4-.172.675-.3.638-.344C32.9,39.47,30.822,33.715,29.761,30.731Z" transform="translate(1058.774 565.277)"></path>
                                                <path className="a" d="M30.48,47.948c.513-1.419,1.075-2.977,1.611-4.5-.1-2.755-.612-16.736-.612-16.736l11.484-8.583-.3-.546.771-.655-1.187-1.717-.675.407-.288-.509L31.2,21.356l-2.328-.179-1.948,2.332-2.6-2.365-2.408-.212L14,14.195l-.443.136-.648-.671-1.882,1.224.681.754c-.093.069-.675.685-.675.685L21.913,26.714c-.033,2.2-.093,5.821-.155,9.158a6.114,6.114,0,0,1-.112,5.643c-.026,1.171-.046,1.991-.06,2.2a.816.816,0,0,1-.149.394l.208.033.767.109.258.734c.327.919.688,1.942,1.058,2.973h2.553v-.876c.1,0,.205-.007.3-.007.361,0,.724,0,1.085,0v.883H30.48v-.007Z" transform="translate(1066.44 548.848)"></path>
                                                <path className="b" d="M14.583,40.237l1.267-.9.043-.03-.063-.245-.235-.9.777-.5,1.882-1.224,1.492-.969.443,1.7.182.152,4.475,3.817c-.119-3.357-.311-8.785-.43-12.218l.03-.073,1.247,5.156s.384-.136.9-.327l.344.9,2.1-.8-.347-.9c.407-.169.678-.3.642-.344-.387-.433-4.048-10.819-4.048-10.819l-3.453-.5-2.064,2.471-2.6-2.358-2.408-.218-7.964-6.8-.318.232-.261-1.012L4.333,14.753l.288,1.1-.767.546,10.9,10.478c-.069,4.769-.275,16.131-.324,17a.857.857,0,0,1-.232.5c.337.949.7,1.958,1.055,2.954l.5-.01v.8h3.377v-.883h.3c.361-.007.724-.007,1.085-.007v.89h2.269L15.7,41.312Z" transform="translate(1049.891 548.548)"></path>
                                                <path className="a" d="M22.779,32.095c-.132-.367-.261-.724-.384-1.062l-.05-.139c-.119-.337-.235-.658-.337-.943-.347-.982-.579-1.627-.579-1.627l-3.453-.5L15.912,30.3l-2.6-2.358-2.408-.215-7.964-6.8-.321.225-.265-1.015L.476,21.359l.288,1.1L0,23.009,10.9,33.491c-.073,4.773-.278,16.134-.324,17C10.5,51.7,7.045,52.4,7.7,53.571c.251.407,1.981.417,4.2.367v.8h3.377v-.88c.1,0,.2,0,.3,0,.361,0,.724,0,1.082,0v.886h3.38v-.853c1.885.017,3.274,0,3.436-.232.539-.794-2.345-1.77-2.388-2.983-.033-.88-.354-10.128-.529-15.132l.026-.073,1.247,5.16.9-.327.347.89,2.094-.8-.344-.9c.4-.169.678-.3.642-.344C25.246,38.882,23.864,35.115,22.779,32.095Z" transform="translate(1041 563.791)"></path>
                                            </g>
                                        </svg>
                                        <p><b>19% Java J2EE</b>, 40% CRM, <b>40% </b>Digital skill employee is at <b>high risk</b>.</p>
                                    </div>
                                    <div className="emp-card-description">
                                        <small>You need to focus on 10% Employee on priority basis</small>
                                    </div>

                                </div> */}
                            </div>
                        </div>
                        <div className="col-4 h-100">
                            <div className="card">
                                <div className="card-header text-center pt-1 pb-2">
                                    <div className="header-title">
                                        <h4 className="card-title">Critical Employee High Flight Risk</h4>
                                    </div>
                                </div>
                                <div className="card-body d-flex h-100 text-center px-4 pt-3 pb-1">
                                    <div className="col-4">
                                        <div className="critical-emp-div-1 text-right">
                                            <b>{employeeRisk.MaleGenderCritical && employeeRisk.MaleGenderCritical.maleCriticalHighRiskPercentage}%</b>
                                            <p>Critical Employee</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 53.987 58.115">

                                            <g transform="translate(-9494.008 -1366.901)">
                                                <g transform="translate(9494.008 1366.901)">
                                                    <g transform="translate(0)">
                                                        <path className="a-icon2" d="M46.077,56.721a7.77,7.77,0,1,0-7.769-7.77A7.769,7.769,0,0,0,46.077,56.721Z" transform="translate(-34.807 -41.182)">
                                                        </path>
                                                        <path className="a-icon2" d="M37.255,138.967H20.017a2.652,2.652,0,0,0-2.644,2.855l1.223,15.9a2.651,2.651,0,0,0,.868,1.766L22.254,162v16.079a2.652,2.652,0,0,0,2.652,2.652h1.161a2.653,2.653,0,0,0,2.569-1.992,2.653,2.653,0,0,0,2.569,1.992h1.161a2.652,2.652,0,0,0,2.652-2.652V162l2.79-2.517a2.651,2.651,0,0,0,.868-1.766l1.223-15.9a2.652,2.652,0,0,0-2.643-2.855Z" transform="translate(-17.365 -122.62)">
                                                        </path>
                                                        <circle className="b-icon2" cx="7.77" cy="7.77" r="7.77" transform="translate(33.118 0)">
                                                        </circle>
                                                        <path className="b-icon2" d="M282.1,168.91l-2.676-15.762.872-11.326a2.653,2.653,0,0,0-2.644-2.855H260.409a2.652,2.652,0,0,0-2.644,2.855l.872,11.329-2.691,15.863A1.567,1.567,0,0,0,257.5,170.8h5.149v7.284a2.652,2.652,0,0,0,2.652,2.652h1.16a2.654,2.654,0,0,0,2.569-1.992,2.652,2.652,0,0,0,2.569,1.992h1.16a2.652,2.652,0,0,0,2.652-2.652V170.8h5.152a1.566,1.566,0,0,0,1.566-1.567A1.5,1.5,0,0,0,282.1,168.91Z" transform="translate(-228.14 -122.62)">
                                                        </path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="col-4">
                                        <div className="critical-emp-div-2 text-left">
                                            <b>{employeeRisk.femaleGenderCritical && employeeRisk.femaleGenderCritical.femaleCriticalHighRiskPercentage}%</b>
                                            <p>Critical Employee</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="emp-card-text">
                                    <div className="emp-card-description pt-3">
                                        <ul className="px-3">
                                            <li className="d-flex align-items-center pb-3 border-bottom">
                                                <div className="profile-icon iq-icon-box rounded-small text-center">
                                                    <div className="lgf-progress lgf-progress-small" data-percentage={employeeRisk.MaleGenderCritical && Math.ceil(employeeRisk.MaleGenderCritical.maleCriticalHighRiskPercentage / 10) * 10}>
                                                        <span className="lgf-progress-left">
                                                            <span className="lgf-progress-bar lgf-progress--blue">
                                                            </span>
                                                        </span>
                                                        <span className="lgf-progress-right">
                                                            <span className="lgf-progress-bar lgf-progress--blue">
                                                            </span>
                                                        </span>
                                                        <div className="lgf-progress-value">
                                                            <div className="lgf-progress-text">
                                                                <h6>{employeeRisk.MaleGenderCritical && employeeRisk.MaleGenderCritical.maleCriticalHighRiskPercentage}%</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="emp-loader-text">
                                                    <b>
                                                        {employeeRisk.MaleGenderCritical && employeeRisk.MaleGenderCritical.maleCriticalHighRiskPercentage}% Male Employees are at high risk, You need to focus on {employeeRisk.MaleGenderCritical && employeeRisk.MaleGenderCritical.totalMaleCriticalHighRiskEmp} Employees on priority basis.
                              </b>

                                                </div>
                                            </li>

                                            <li className="d-flex align-items-center py-3">
                                                <div className="profile-icon iq-icon-box rounded-small text-center">
                                                    <div className="lgf-progress lgf-progress-small" data-percentage={employeeRisk.femaleGenderCritical && Math.ceil(employeeRisk.femaleGenderCritical.femaleCriticalHighRiskPercentage / 10) * 10}>
                                                        <span className="lgf-progress-left">
                                                            <span className="lgf-progress-bar lgf-progress--orange">
                                                            </span>
                                                        </span>
                                                        <span className="lgf-progress-right">
                                                            <span className="lgf-progress-bar lgf-progress--orange">
                                                            </span>
                                                        </span>
                                                        <div className="lgf-progress-value">
                                                            <div className="lgf-progress-text">
                                                                <h6>{employeeRisk.femaleGenderCritical && employeeRisk.femaleGenderCritical.femaleCriticalHighRiskPercentage}%</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="emp-loader-text">
                                                    <b>
                                                        {employeeRisk.femaleGenderCritical && employeeRisk.femaleGenderCritical.femaleCriticalHighRiskPercentage}% Female Employees are at high risk, You need to focus on {employeeRisk.femaleGenderCritical && employeeRisk.femaleGenderCritical.totalFemaleCriticalHighRiskEmp} Employees on priority basis.
                              </b>

                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}