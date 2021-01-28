import React, { useState } from 'react'

export default (props) => {
    const [type, setType] = useState({
        department: '-1',
        location: '-1',
        technology: '-1'
    })
    const filterData = () => {
        props.filterData(type)
    }
    const clearFilter = () => {
        setType({
            department: '-1',
            location: '-1',
            technology: '-1'
        })
    }
    const handleSelect = (e, handletype) => setType({ ...type, [handletype]: e.target.value })
    return (
        <div className="row w-70">
            <select value={type['department']} className="col-3 form-control form-control-sm mb-3 mr-1" onChange={(e) => handleSelect(e, 'department')}>
                <option value="-1">Department</option>
                <option value="4">BFSI</option>
                <option value="1">Manufacturing</option>
                <option value="2">Energy</option>
                <option value="3">Life Sciences</option>
            </select>
            <select value={type['location']} className="col-2 form-control form-control-sm mb-3 mr-1" onChange={(e) => handleSelect(e, 'location')}>
                <option value="-1">Location</option>
                <option value="1">Noida</option>
                <option value="2">Bengaluru</option>
                <option value="3">Chennai</option>
                <option value="4">Kolkatta</option>
                <option value="5">Mumbai</option>
            </select>
            <select value={type['technology']} className="col-3 form-control form-control-sm mb-3 mr-1" onChange={(e) => handleSelect(e, 'technology')}>
                <option value="-1">Technology</option>
                <option value="1">Java J2EE</option>
                <option value="2">Microsoft</option>
                <option value="3">Infra</option>
                <option value="4">Data & Analytics</option>
                <option value="5">CRM</option>
            </select>
            <button type="button" onClick={() => filterData()} style={{ lineHeight: '24px' }} className="col-1 form-control-sm btn btn-primary btn-sm mr-1">Go</button>
            <button type="button" onClick={() => clearFilter()} style={{ lineHeight: '24px' }} className="col-2 btn form-control-sm btn-secondary btn-sm">Clear</button>
        </div>
    )
}