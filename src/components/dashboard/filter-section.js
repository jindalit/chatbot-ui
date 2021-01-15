import React from 'react'

export default () => {
    return (
        <div className="col-lg-12 mb-3">
            <div className="d-flex align-items-center justify-content-between welcome-content">
                <div className="navbar-breadcrumb">
                    <h3 className="mb-0" style={{ fontWeight: 'bold' }}>Company Pulse Score View</h3>
                </div>
                <div className="">
                    <a className="button btn button-icon filter-btn" href="#"><i className="fa fa-calendar"></i>&nbsp;&nbsp; Department<i
                        className="ml-2 ri-arrow-down-s-fill"></i></a>
                    <a className="button btn button-icon filter-btn" href="#"><i className="fa fa-calendar"></i>&nbsp;&nbsp; Location<i
                        className="ml-2 ri-arrow-down-s-fill"></i></a>
                    <a className="button btn button-icon filter-btn" href="#"><i className="fa fa-calendar"></i>&nbsp;&nbsp; Technology<i
                        className="ml-2 ri-arrow-down-s-fill"></i></a>
                    <a className="button btn button-icon filter-btn" href="#"><i className="fa fa-calendar"></i>&nbsp;&nbsp; Today<i
                        className="ml-2 ri-arrow-down-s-fill"></i></a>


                </div>
            </div>
        </div>
    )
}