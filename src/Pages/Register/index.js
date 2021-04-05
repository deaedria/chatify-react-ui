import React from 'react';
import Button from '../../Components/Button';
import BackPage from '../../Components/BackPage';
import InputField from '../../Components/InputField';

const Register = () => {
    return (<>
        <div className="container">
            <div className="form-box">
                <BackPage className="back-page" header="Register" />
                <p>Let's create your account!</p>
                <form className="form-register">
                    <InputField 
                        className="form-register-group"
                        type="text" 
                        id="name-register"
                        name="name" 
                        label="Name" 
                    />
                    <InputField 
                        className="form-register-group"
                        type="text" 
                        id="email-register"
                        name="email" 
                        label="Email" 
                    />
                    <InputField 
                        className="form-register-group"
                        type="password" 
                        id="password-register"
                        name="password" 
                        label="Password" 
                        img="/svg/eye-icon.svg"
                        alt="eye icon"
                    />
                    <Button type="submit" className="submit-register" content="Register" />
                    <h4><span>Register with</span></h4>
                    <Button type="submit" className="google-register" content="Google" img="/svg/google-icon.svg" alt="google icon" />
                </form>
            </div>
        </div>
    </>)
}

export default Register
