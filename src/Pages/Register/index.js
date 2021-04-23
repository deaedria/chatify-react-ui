import React, { useState } from 'react';
import { withRouter } from "react-router";
import * as EmailValidator from "email-validator";
import Button from '../../Components/Button';
import BackPage from '../../Components/BackPage';
import ErrFormat from '../../Components/ErrFormat';
import MessageFormat from '../../Components/MessageFormat';
import { UserRegister } from '../../Redux/Actions/users'
import { useDispatch, useSelector } from 'react-redux'

const Register = () => {
    const dispatch = useDispatch()
    const { isRegister, error, loading } = useSelector((state) => state.UserRegister)

    const [formData, setFormData] = useState({
        phone: '',
        email: '',
        password: '',
        err: null,
        message: ''
    })

    const onSubmit = (e) => {
        e.preventDefault();

        const regex = /^([0-9]{10,12})$/;

        if (EmailValidator.validate(formData.email) && formData.phone.match(regex)) {
            dispatch(UserRegister(formData))
            if (isRegister === false) {
                setFormData({
                    ...formData, err: error, message: ''
                });
            }else{
                setFormData({
                    ...formData, err: '', message: 'Successfully Registered'
                });
            }
        } else if (!formData.phone.match(regex)) {
            setFormData({
                ...formData, err: '(Enter Valid Phone Number !)', message: ''
            });
        } else if (!EmailValidator.validate(formData.email)) {
            setFormData({
                ...formData, err: '(Enter Valid Email !)', message: ''
            });
        }

    }

    const onClick = (e) => {
        e.preventDefault();

        var x = document.getElementById('password-register').type;

        if (x === 'password') {
            document.getElementById('password-register').type = 'text';
            document.getElementById('mybutton').innerHTML = "<img src='/svg/eye-icon.svg' alt='eye icon' />";
        } else {
            document.getElementById('password-register').type = 'password';
            document.getElementById('mybutton').innerHTML = "<img src='/svg/eye-invisible-icon.svg' alt='eye invisible icon' />";
        }
    }

    return (<>
        <div className="container">
            <div className="form-box">
                <BackPage className="back-page" header="Register" url="login" />
                <p>Let's create your account!</p>
                <ErrFormat err={formData.err} /> 
                {/* {formData.err === '' ?
                    <div className="hide-message"></div>
                    : <ErrFormat err={formData.err} />} */}
                {isRegister === true ?
                <div>
                    <ErrFormat err={null} />
                    <MessageFormat message={formData.message} />
                </div>
                    : <div className="hide-message hide-err"></div> }
                <form onSubmit={(e) => onSubmit(e)} className="form-register" autoComplete="off">
                    <div className="form-register-group">
                        <input type="tel" id="phone-register" name="phone" required onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value })
                        }} />
                        <label htmlFor="input-field">Phone</label>
                    </div>
                    <div className="form-register-group">
                        <input type="text" id="email-register" name="email" required onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value })
                        }} />
                        <label htmlFor="input-field">Email</label>
                    </div>
                    <div className="form-register-group">
                        <input type="password" id="password-register" name="password" required onChange={(e) => {
                            setFormData({ ...formData, password: e.target.value })
                        }} />
                        <div className="input-group-append">
                            <span id="mybutton" onClick={(e) => onClick(e)} >
                                <img src="/svg/eye-invisible-icon.svg" alt="eye icon" />
                            </span>
                        </div>
                        <label htmlFor="input-field">Password</label>
                    </div>
                    {loading ? (
                        <Button disabled={loading} type="submit" className="submit-register" content="Loading..." onClick={(e) => onSubmit(e)} />
                    ) : (
                        <Button type="submit" className="submit-register" content="Register" onClick={(e) => onSubmit(e)} />
                    )}
                    <h4><span>Register with</span></h4>
                    <Button type="submit" className="google-register" content="Google" img="/svg/google-icon.svg" alt="google icon" />
                </form>
            </div>
        </div>
    </>)
}

export default withRouter(Register)
