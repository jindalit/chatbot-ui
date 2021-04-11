import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const Signup = props => {
    useEffect(() => {
        if (props.getNewUser) {
            alert('User registartion successfully in chat bot.')
            props.resetNewUser()
            setFormData({})
            props.history.push("/login");
        }
    }, [props.getNewUser])
    const [formData, setFormData] = useState({
        "fName": "",
        "mName": "",
        "lName": "",
        "mobileNo": '',
        "emailId": "",
        "ldap": ""
    })
    const myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        setFormData({ ...formData, [nam]: val });
    }
    const validation = () => {
        let retVal = true
        for (let key in formData) {
            if (key !== 'mName' && formData[key] === '') {
                retVal = false
                break
            }
        }
        return retVal
    }
    const signUpSubmit = (e) => {
        if (validation()) {
            props.signUpRequest(formData)
        } else {
            alert('Please fill all mandatory fields.')
        }
    }
    return (<div className="wrapper">
        <section className="login-content">
            <div className="container h-100">
                <div className="row align-items-center justify-content-center h-100">
                    <div className="col-12">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h2 className="mb-2">Sign Up</h2>
                                <p>Enter your personal details and start journey with us.</p>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="floating-label form-group">
                                            <input className="floating-input form-control" name='fName' onChange={myChangeHandler} type="text" placeholder=" " />
                                            <label>First Name</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="floating-label form-group">
                                            <input className="floating-input form-control" name='mName' onChange={myChangeHandler} type="text" placeholder=" " />
                                            <label>Middle Name</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="floating-label form-group">
                                            <input className="floating-input form-control" name='lName' onChange={myChangeHandler} type="text" placeholder=" " />
                                            <label>Last Name</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="floating-label form-group">
                                            <input className="floating-input form-control" name='emailId' onChange={myChangeHandler} type="email" placeholder=" " />
                                            <label>Email</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="floating-label form-group">
                                            <input className="floating-input form-control" name='mobileNo' onChange={myChangeHandler} type="text" placeholder=" " />
                                            <label>Phone No.</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="floating-label form-group">
                                            <input className="floating-input form-control" name='ldap' onChange={myChangeHandler} type="password" placeholder=" " />
                                            <label>Password</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">I agree with the terms of use</label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={e => signUpSubmit(e)}>Sign Up <i className="fa fa-arrow-right"></i></button>
                                <p className="mt-3">
                                    Already have an Account <Link to="/login" className="text-primary">Sign In</Link>
                                </p>

                            </div>
                            <div className="col-lg-6 mb-lg-0 mb-4 mt-lg-0 mt-4">
                                <img src={process.env.PUBLIC_URL + '/images/login.png'} className="img-fluid w-80" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>)
}

export default Signup