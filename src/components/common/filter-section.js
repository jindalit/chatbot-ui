import React, { useState } from 'react'

export default (props) => {
    const [type, setType] = useState({
        Department: '',
        Location: '',
        Technology: ''
    })
    const filterData = () => {
        props.filterData(type)
    }
    const clearFilter = () => {
        setType({
            Department: '',
            Location: '',
            Technology: ''
        })
        props.filterData({
            Department: '',
            Location: '',
            Technology: ''
        })
    }
    const handleSelect = (e, handletype) => setType({ ...type, [handletype]: e.target.value })
    return (
        <div className="row w-70">
            <select value={type['Department']} className="col-3 form-control form-control-sm mb-3 mr-1" onChange={(e) => handleSelect(e, 'Department')}>
                <option value=''>Department</option>
                <option>BFSI</option>
                <option>Manufacturing</option>
                <option>Energy</option>
                <option>Life Sciences</option>
            </select>
            <select value={type['Location']} className="col-3 form-control form-control-sm mb-3 mr-1" onChange={(e) => handleSelect(e, 'Location')}>
                <option value="">Location</option>
                <option>Noida</option>
                <option>Bengaluru</option>
                <option>Chennai</option>
                <option>Kolkatta</option>
                <option>Mumbai</option>
            </select>
            <select value={type['Technology']} className="col-3 form-control form-control-sm mb-3 mr-1" onChange={(e) => handleSelect(e, 'Technology')}>
                <option value="">Technology</option>
                <option>Java J2EE</option>
                <option>Microsoft</option>
                <option>Infra</option>
                <option>Data & Analytics</option>
                <option>CRM</option>
            </select>
            <button type="button" onClick={() => filterData()} style={{ lineHeight: '24px' }} className="col-1 form-control-sm btn btn-primary btn-sm mr-1">Go</button>
            <button type="button" onClick={() => clearFilter()} style={{ lineHeight: '24px' }} className="col-1 btn form-control-sm btn-secondary btn-sm">Clear</button>
        </div>
    )
}