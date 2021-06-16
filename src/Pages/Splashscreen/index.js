import React from 'react';
import { useHistory } from "react-router-dom"

const SplashScreen = () => {
    const history = useHistory();
    const load = () => {
        setTimeout(() => history.replace('/login'), 1500)
    }

    return (
        <div className="bg-splashscreen" onLoad={() => load()}>
            <div className="spinner">
                <div className="spinning-wheel"><img src="/svg/spinner-1.svg" alt="wheel" /></div>
                <div className="spinning-wheel"><img src="/svg/spinner-1.svg" alt="wheel" /></div>
                <div className="spinning-wheel"><img src="/svg/spinner-1.svg" alt="wheel" /></div>
                <div className="spinning-wheel"><img src="/svg/spinner-1.svg" alt="wheel" /></div>
                <div className="spinning-wheel"><img src="/svg/spinner-1.svg" alt="wheel" /></div>
                <div className="spinning-wheel"><img src="/svg/spinner-1.svg" alt="wheel" /></div>
            </div>
        </div>
    )
}

export default SplashScreen
