import React, { Component } from 'react';
import { Link} from "react-router-dom";
import { withRouter } from "react-router";
import * as EmailValidator from "email-validator";
import Button from '../../Components/Button';
import InputField from '../../Components/InputField';
// import style from '../../Assets/custom.css'
// import { Link, useHistory } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            err: ''
        };
    }
    
    login(e){
        e.preventDefault();
        var email = e.target.elements.email.value;
        // var password = e.target.elements.password.value;
        if(EmailValidator.validate(email)){
            this.props.history.push('/chatlist/' + email)
        }
        if(!EmailValidator.validate(email)){
            this.setState({
                err: 'Enter Valid Email'
            });
        }
        console.log(EmailValidator.validate(email))
    }

    errMessage(){
        const error = this.state.err !== '' ? this.state.err : ''
        alert(error)
    }

    render(){
        let err = this.errMessage()
        return (
            <div className="container">
                <div className="form-box">
                    <h3>Login</h3>
                    <p>Hi, Welcome back</p>
                    <form onSubmit={this.login.bind(this)} className="form-login" autoComplete="off">
                        <InputField 
                            className="form-login-group"
                            type="text" 
                            id="email-login"
                            name="email" 
                            label="Email" 
                        /><div className="err-format">{err}</div>
                        <InputField 
                            className="form-login-group"
                            type="password" 
                            id="password-login"
                            name="password" 
                            label="Password" 
                            img="/svg/eye-icon.svg"
                            alt="eye icon"
                        />
                        <div className="forget-password">
                            <Link to={"/forgot"}>Forget password?</Link>
                        </div>
                        <Button type="submit" className="submit-login" content="Login" />
                        <h4><span>Login with</span></h4>
                        <Button type="submit" className="google-login" content="Google" img="/svg/google-icon.svg" alt="google icon" />
                        <div className="signup-link">
                            Don't have an account? <Link to={"/register"}>Sign Up</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)

/* <div>ini Login</div> */
/* <Link to='/register'>Beralih ke register</Link> */
/* <button onClick={() => history.push('./register')}>Register</button> */

