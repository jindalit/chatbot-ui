import React from 'react'

export default () => {
    return (
        <div className="col-lg-12 mb-3">
            <div className="d-flex justify-content-between px-3 py-0 m-1" style={{ width: '100%' }}>
                <h3 className="mb-0" style={{ fontWeight: 'bold' }}>Company Pulse Score View</h3>
                <div className="row w-50">
                    <select className="col-4 form-control form-control-sm mb-3">
                        <option selected="">Department</option>
                        <option value="4">BFSI</option>
                        <option value="1">Manufacturing</option>
                        <option value="2">Energy</option>
                        <option value="3">Life Sciences</option>
                    </select>
                    <select className="col-4 form-control form-control-sm mb-3">
                        <option selected="">Location</option>
                        <option value="1">Noida</option>
                        <option value="2">Bengaluru</option>
                        <option value="3">Chennai</option>
                        <option value="4">Kolkatta</option>
                        <option value="5">Mumbai</option>
                    </select>
                    <select className="col-4 form-control form-control-sm mb-3">
                        <option selected="">Technology</option>
                        <option value="1">Java J2EE</option>
                        <option value="2">Microsoft</option>
                        <option value="3">Infra</option>
                        <option value="4">Data & Analytics</option>
                        <option value="5">CRM</option>
                    </select>
                </div>
            </div>
        </div>
    )
}