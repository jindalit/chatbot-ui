import React from 'react'

export default () => {
    return (
        <React.Fragment>
            <div className="d-flex justify-content-between px-3 py-0 m-1" style={{ width: '100%' }}>
                <h4>Attrition Predictor -Summary</h4>
                <div className="row w-50">
                    <select className="col-4 form-control form-control-sm mb-3">
                        <option selected="">Department</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select className="col-4 form-control form-control-sm mb-3">
                        <option selected="">Location</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select className="col-4 form-control form-control-sm mb-3">
                        <option selected="">Today</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div className="card card-body pb-0">
                <div className="d-flex justify-content-between align-items-center" id="NavLinks-Attrition">
                    <div className="todo-date d-flex">

                        <ul className="nav nav-tabs mb-0" id="myTab-1" role="tablist">
                            <li className="nav-item align-self-end">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                                    Fight Risk: Pan Enterprise
                  </a>
                            </li>
                            <li className="nav-item align-self-end">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#Demographics" role="tab" aria-controls="profile" aria-selected="false">
                                    Fight Risk: Demographics
                  </a>
                            </li>
                            <li className="nav-item align-self-end">
                                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#EmployeeLevel" role="tab" aria-controls="contact" aria-selected="false">
                                    Fight Risk: Employee Level
                  </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}