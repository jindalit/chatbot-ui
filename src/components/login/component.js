import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const Login = (props) => {
    const [formDate, setFormData] = useState({})
    useEffect(() => {
        if (props.user) {
            props.history.push("/chat");
        }
    }, [props.user])
    const myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        setFormData({ ...formDate, [nam]: val });
    }
    const loginSubmit = (e) => {
        if (formDate.emailId !== '' && formDate.ldap !== '') {
            props.logInRequest(formDate)
        } else {
            alert('Please enter email and password to login.')
        }
    }
    return (<div className="wrapper">
        <section className="login-content">
            <div className="container h-100">
                <div className="row align-items-center justify-content-center h-100">
                    <div className="col-12">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h2 className="mb-2">Welcome</h2>
                                <p>To Keep connected with us please login with your personal info.</p>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="floating-label form-group">
                                            <input className="floating-input form-control" name='emailId' type="email" onChange={myChangeHandler} placeholder=" " />
                                            <label>Email</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="floating-label form-group">
                                            <input className="floating-input form-control" type="password" name='ldap' onChange={myChangeHandler} placeholder=" " />
                                            <label>Password</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" for="customCheck1">Remember Me</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <Link to="/forgot" className="text-primary float-right">Forgot Password?</Link>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={e => loginSubmit(e)}>Sign In <i className="fa fa-arrow-right"></i>
                                </button>
                                <p className="mt-3">
                                    Create an Account -  <Link to="/signup" className="text-primary">Sign Up</Link>
                                </p>
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

export default Login