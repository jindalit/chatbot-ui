import React from 'react'


export default (props) => {
    return (
        <React.Fragment>
            <div className="card card-body my-3 emp-card-1">
                <div className="d-flex align-items-center">

                    <div className="col-4">
                        <h3>Risk Analysis of employees covered</h3>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="mx-3 lgf-progress lgf-progress-small" data-percentage="50">
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
                                    <h6>50%</h6>
                                </div>
                            </div>
                        </div>
                        <p>High Risk Employees</p>
                    </div>

                    <div className="d-flex align-items-center">
                        <div className="mx-3 lgf-progress lgf-progress-small" data-percentage="30">
                            <span className="lgf-progress-left">
                                <span className="lgf-progress-bar lgf-progress--warning">
                                </span>
                            </span>
                            <span className="lgf-progress-right">
                                <span className="lgf-progress-bar lgf-progress--warning">
                                </span>
                            </span>
                            <div className="lgf-progress-value">
                                <div className="lgf-progress-text">
                                    <h6>30%</h6>
                                </div>
                            </div>
                        </div>
                        <p>Medium Risk Employees</p>
                    </div>

                    <div className="d-flex align-items-center">
                        <div className="mx-3 lgf-progress lgf-progress-small" data-percentage="20">
                            <span className="lgf-progress-left">
                                <span className="lgf-progress-bar lgf-progress--success">
                                </span>
                            </span>
                            <span className="lgf-progress-right">
                                <span className="lgf-progress-bar lgf-progress--success">
                                </span>
                            </span>
                            <div className="lgf-progress-value">
                                <div className="lgf-progress-text">
                                    <h6>20%</h6>
                                </div>
                            </div>
                        </div>
                        <p>No Risk Employees</p>
                    </div>

                </div>
            </div>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <div className="header-title">
                        <h4 className="card-title">Profiles</h4>
                    </div>
                </div>
                <div className="card-body">
                    <div className="">
                        <table id="user-list-table" className="table table-striped" role="grid" aria-describedby="user-list-page-info">
                            <thead>
                                <tr className="border-0">
                                    <th>Profile</th>
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                    <th>Country</th>
                                    <th>Status</th>
                                    <th>Company</th>
                                    <th>Join Date</th>
                                    <th style={{ minWidth: "100px" }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center"><img className="rounded img-fluid avatar-40" src={process.env.PUBLIC_URL + 'images/user.jpg'} alt="profile" /></td>
                                    <td>Anna Sthesia</td>
                                    <td>(760) 756 7568</td>
                                    <td>annasthesia@gmail.com</td>
                                    <td>USA</td>
                                    <td><span className="badge iq-bg-primary">Active</span></td>
                                    <td>Acme Corporation</td>
                                    <td>2019/12/01</td>
                                    <td>
                                        <div className="flex align-items-center list-user-action">
                                            <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add" href="#"><i className="ri-user-add-line"></i></a>
                                            <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i className="ri-pencil-line"></i></a>
                                            <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i className="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center"><img className="rounded img-fluid avatar-40" src={process.env.PUBLIC_URL + 'images/user.jpg'} alt="profile" /></td>
                                    <td>Brock Lee</td>
                                    <td>+62 5689 458 658</td>
                                    <td>brocklee@gmail.com</td>
                                    <td>Indonesia</td>
                                    <td><span className="badge iq-bg-primary">Active</span></td>
                                    <td>Soylent Corp</td>
                                    <td>2019/12/01</td>
                                    <td>
                                        <div className="flex align-items-center list-user-action">
                                            <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add" href="#"><i className="ri-user-add-line"></i></a>
                                            <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i className="ri-pencil-line"></i></a>
                                            <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i className="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center"><img className="rounded img-fluid avatar-40" src={process.env.PUBLIC_URL + 'images/user.jpg'} alt="profile" /></td>
                                    <td>Dan Druff</td>
                                    <td>+55 6523 456 856</td>
                                    <td>dandruff@gmail.com</td>
                                    <td>Brazil</td>
                                    <td><span className="badge iq-bg-warning">Pending</span></td>
                                    <td>Umbrella Corporation</td>
                                    <td>2019/12/01</td>
                                    <td>
                                        <div className="flex align-items-center list-user-action">
                                            <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add" href="#"><i className="ri-user-add-line"></i></a>
                                            <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i className="ri-pencil-line"></i></a>
                                            <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i className="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center"><img className="rounded img-fluid avatar-40" src={process.env.PUBLIC_URL + 'images/user.jpg'} alt="profile" /></td>
                                    <td>Hans Olo</td>
                                    <td>+91 2586 253 125</td>
                                    <td>hansolo@gmail.com</td>
                                    <td>India</td>
                                    <td><span className="badge iq-bg-danger">Inactive</span></td>
                                    <td>Vehement Capital</td>
                                    <td>2019/12/01</td>
                                    <td>
                                        <div className="flex align-items-center list-user-action">
                                            <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add" href="#"><i className="ri-user-add-line"></i></a>
                                            <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i className="ri-pencil-line"></i></a>
                                            <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i className="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center"><img className="rounded img-fluid avatar-40" src={process.env.PUBLIC_URL + 'images/user.jpg'} alt="profile" /></td>
                                    <td>Lynn Guini</td>
                                    <td>+27 2563 456 589</td>
                                    <td>lynnguini@gmail.com</td>
                                    <td>Africa</td>
                                    <td><span className="badge iq-bg-primary">Active</span></td>
                                    <td>Massive Dynamic</td>
                                    <td>2019/12/01</td>
                                    <td>
                                        <div className="flex align-items-center list-user-action">
                                            <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add" href="#"><i className="ri-user-add-line"></i></a>
                                            <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i className="ri-pencil-line"></i></a>
                                            <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i className="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="row justify-content-between mt-3">
                        <div id="user-list-page-info" className="col-md-6">
                        </div>
                        <div className="col-md-6">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-end mb-0">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" tabindex="-1" aria-disabled="true">
                                            <i className="fa fa-caret-left"></i>
                                        </a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            <i className="fa fa-caret-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}