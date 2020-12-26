import React from 'react'
import { Link } from "react-router-dom";

const Reset = props => {

    return (<div className="wrapper">
        <section className="login-content">
            <div className="container h-100">
                <div className="row align-items-center justify-content-center h-100">
                    <div className="col-12">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h2 className="mb-2">Reset Password</h2>
                                <p>Enter your email address and we'll send you an email with instructions to reset your password.</p>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="floating-label form-group">
                                                <input className="floating-input form-control" type="email" placeholder=" " />
                                                <label>Email</label>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-danger">Reset <i className="fa fa-refresh" aria-hidden="true"></i>
                                    </button>
                                    <p className="mt-3">
                                        Back to Login -  <Link to="/login" className="text-primary">Click Here</Link>
                                    </p>
                                </form>
                            </div>
                            <div className="col-lg-6 mb-lg-0 mb-4 mt-lg-0 mt-4">
                                <img src={process.env.PUBLIC_URL + 'images/login.png'} className="img-fluid w-80" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>)
}

export default Reset