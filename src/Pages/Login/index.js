import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import * as EmailValidator from "email-validator";
import Button from '../../Components/Button';
import ErrFormat from '../../Components/ErrFormat';
import { UserLogin } from '../../Redux/Actions/users'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
    const dispatch = useDispatch()
    const { error, loading } = useSelector((state) => state.UserLogin)

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        err: null,
    })

    console.log(error)

    const onSubmit = (e) => {
        e.preventDefault();

        if (EmailValidator.validate(formData.email)) {
            dispatch(UserLogin(formData))
            setFormData({
                ...formData, err: error
            });
        } else if (!EmailValidator.validate(formData.email)) {
            setFormData({
                ...formData, err: '(Enter Valid Email !)'
            });
        }
    }

    const onClick = (e) => {
        e.preventDefault();

        var x = document.getElementById('password-login').type;

        if (x === 'password') {
            document.getElementById('password-login').type = 'text';
            document.getElementById('mybutton').innerHTML = "<img src='/svg/eye-invisible-icon.svg' alt='eye icon' />";
        } else {
            document.getElementById('password-login').type = 'password';
            document.getElementById('mybutton').innerHTML = "<img src='/svg/eye-icon.svg' alt='eye invisible icon' />";
        }
    }

    return (
        <div className="container">
            <div className="form-box">
                <h3>Login</h3>
                <p>Hi, Welcome back</p>
                <div className="login-err">
                    <ErrFormat err={formData.err} />
                </div>
                <form onSubmit={(e) => onSubmit(e)} className="form-login" autoComplete="off">
                    <div className="form-login-group">
                        <input autoFocus type="email" data-testid="email-login" id="email-login" name="email" required onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value })
                        }} />
                        <label htmlFor="input-field">Email</label>
                    </div>
                    <div className="form-login-group">
                        <input type="password" data-testid="password-login" id="password-login" name="password" required onChange={(e) => {
                            setFormData({ ...formData, password: e.target.value })
                        }} />
                        <div className="input-group-append">
                            <span id="mybutton" onClick={(e) => onClick(e)} >
                                <img src="/svg/eye-icon.svg" alt="eye icon" />
                            </span>
                        </div>
                        <label htmlFor="input-field">Password</label>
                    </div>
                    <div className="forget-password">
                        <Link to={"/forgot"}>Forget password?</Link>
                    </div>
                    {loading ? (
                        <Button disabled={loading} type="submit" className="submit-login" content="Loading..." onClick={(e) => onSubmit(e)} />
                    ) : (
                        <Button type="submit" className="submit-login" content="Login" onClick={(e) => onSubmit(e)} />
                    )}
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

export default withRouter(Login)

// class Login extends Component {
//     constructor() {
//         super()
//         this.state = {
//             err: ''
//         };
//     }

//     login(e) {
//         e.preventDefault();
//         var email = e.target.elements.email.value;
//         // var password = e.target.elements.password.value;
//         if (EmailValidator.validate(email)) {
//             this.props.history.push('/chatlist/user_id')
//         }
//         if (!EmailValidator.validate(email)) {
//             this.setState({
//                 err: '(Enter Valid Email !)'
//             });
//         }
//         console.log(EmailValidator.validate(email))
//     }

//     errMessage() {
//         const error = this.state.err !== '' ? this.state.err : ''
//         return error
//     }

//     // close() {
//     //     document.querySelector('.err-format').style.display = 'none'
//     // }

//     render() {
//         let err = this.errMessage()
//         return (
//             <div className="container">
//                 <div className="form-box">
//                     <h3>Login</h3>
//                     <p>Hi, Welcome back</p>
//                     <div className="err-format">
//                         {/* <span class="closeBtn" onClick={this.close.bind(this)}>x</span> */}
//                         {err}
//                     </div>
//                     <form onSubmit={this.login.bind(this)} className="form-login" autoComplete="off">
//                         <InputField
//                             className="form-login-group"
//                             type="text"
//                             id="email-login"
//                             name="email"
//                             label="Email"
//                         />
//                         <InputField
//                             className="form-login-group"
//                             type="password"
//                             id="password-login"
//                             name="password"
//                             label="Password"
//                             img="/svg/eye-icon.svg"
//                             alt="eye icon"
//                         />
//                         <div className="forget-password">
//                             <Link to={"/forgot"}>Forget password?</Link>
//                         </div>
//                         <Button type="submit" className="submit-login" content="Login" />
//                         <h4><span>Login with</span></h4>
//                         <Button type="submit" className="google-login" content="Google" img="/svg/google-icon.svg" alt="google icon" />
//                         <div className="signup-link">
//                             Don't have an account? <Link to={"/register"}>Sign Up</Link>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

// export default withRouter(Login)

/* <div>ini Login</div> */
/* <Link to='/register'>Beralih ke register</Link> */
/* <button onClick={() => history.push('./register')}>Register</button> */

