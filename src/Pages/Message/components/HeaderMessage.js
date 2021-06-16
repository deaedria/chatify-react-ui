import React from 'react';
// import { useParams } from "react-router-dom";
import BackPage from "../../../Components/BackPage"

const HeaderMessage = (props) => {
    const {imgContact, contactName} = props

    // const { name } = useParams();
    // const split = name.split('-').join(' ');
    // console.log(split)
    return (
        <header className="top-wrapper">
            <BackPage url={"localhost:3000/chatlist"} className="back-page back-sm-device" />
            <img src={imgContact} alt="profile contact" />
            <div className="text">
                <h6>{contactName}</h6>
                {/* <p>Online</p> */}
            </div>
        </header>
    )
}

export default HeaderMessage