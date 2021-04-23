import React from 'react';
import Button from '../../Components/Button';
import BackPage from '../../Components/BackPage';
import InputField from '../../Components/InputField';

const ForgotPassword = () => {
    return (<>
        <div className="container">
            <div className="form-box form-fg-box">
                <BackPage className="back-page" header="Forgot Password" url="login" />
                <p>You'll get messages soon on your e-mail</p>
                <form className="form-forgot-password">
                    <InputField 
                        className="form-fg-group"
                        type="text" 
                        id="email-forgot-password"
                        name="email" 
                        label="Email" 
                    />
                    <Button type="submit" className="submit-email" content="Send" />
                </form>
            </div>
        </div>
    </>)
}

export default ForgotPassword
