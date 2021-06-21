import React from 'react';
// import { useParams } from "react-router-dom";
import BackPage from "../../../Components/BackPage"

const HeaderMessage = (props) => {
    const {imgContact, contactName} = props

    return (
        <header className="top-wrapper">
            <BackPage url={"localhost:3000/chatlist"} className="back-page back-sm-device" />
            <img src={imgContact !== undefined || imgContact !== null ? imgContact : '/img/white.jpg'} alt="profile contact" className="profile-header" />
            <div className="text">
                <h6>{contactName !== undefined ? contactName : ''}</h6>
                {/* <p>Online</p> */}
            </div>
        </header>
    )
}

export default HeaderMessage