import React from 'react';
import { useParams } from "react-router-dom";
// import Hammer from 'hammerjs';
// import image from "../../../../chatify-app/"

const MessageList = (props) => {
    const {
        imgFriend,
        imgUser,
        senderId,
        content
    } = props
    // console.log(typeof senderId)

    const { contact } = useParams();
    // const split = name.split('-').join(' ');
    // console.log(typeof contact)
    if (parseInt(contact) === senderId) {
        return (
            <div className="row">
                <div className="col-md-6">
                    <div className="single-message-left">
                        <img src={imgFriend} alt="profile contact" className="profile-image" />
                        <div className="sender-content">
                            <p>{content}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (parseInt(contact) !== senderId) {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-6">
                    <div className="single-message-right">
                        <div className="user-content">
                            <p>{content}</p>
                        </div>
                        <img src={"/" + imgUser} alt="profile contact" className="profile-image" />
                    </div>
                </div>
            </div>
        )
    }
}

export default MessageList