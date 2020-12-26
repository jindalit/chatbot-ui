import React from 'react'
import { Link } from "react-router-dom";

const Signup = props => {

    return (<div className="wrapper">
        <section className="login-content">
            <div className="container h-100">
                <div className="row align-items-center justify-content-center h-100">
                    <div className="col-12">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h2 className="mb-2">Sign Up</h2>
                                <p>Enter your personal details and start journey with us.</p>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="floating-label form-group">
                                                <input className="floating-input form-control" type="text" placeholder=" " />
                                                <label>Full Name</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="floating-label form-group">
                                                <input className="floating-input form-control" type="text" placeholder=" " />
                                                <label>Last Name</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="floating-label form-group">
                                                <input className="floating-input form-control" type="email" placeholder=" " />
                                                <label>Email</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="floating-label form-group">
                                                <input className="floating-input form-control" type="text" placeholder=" " />
                                                <label>Phone No.</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="floating-label form-group">
                                                <input className="floating-input form-control" type="password" placeholder=" " />
                                                <label>Password</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="floating-label form-group">
                                                <input className="floating-input form-control" type="password" placeholder=" " />
                                                <label>Confirm Password</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="custom-control custom-checkbox mb-3">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">I agree with the terms of use</label>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Sign Up <i className="fa fa-arrow-right"></i></button>
                                    <p className="mt-3">
                                        Already have an Account <Link to="/login" className="text-primary">Sign In</Link>
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

export default Signup