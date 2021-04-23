import React from 'react';
// import { Link } from 'react-router-dom';
// import Hammer from 'hammerjs';
// import image from "../../../../chatify-app/"

const Chat = (props) => {
    const {
        imgProfile,
        name,
        imgNotif,
        text,
        time,
        imgCheck,
        altCheck,
        badgeClass,
        badge,
        onClick
    } = props

    return (
        <ul className="list">
            <button onClick={onClick} className="button-chat">
                <li className="chat-list list-item">
                    <img src={"../../../../" + imgProfile} alt="friend" className="profile-image" />
                    <div className="text">
                        <h6>{name}
                            {imgNotif !== 'off' ?
                                <img src="/svg/bell-icon.svg" alt="bell icon" /> : ""
                            }
                        </h6>
                        <p className="other-account">
                            {text}
                        </p>
                        {/* <p className={textClass}>
                            {(textClass === "other-account") ? text : "Me: " + text}
                        </p> */}
                    </div>
                    <div className="chat-list-right align-items-end">
                        <div className="time">{time}</div>
                        <div className={badgeClass}>{badge}</div>
                        {imgCheck !== undefined ?
                            <img src={"/svg/" + imgCheck} alt={altCheck} /> : ""
                        }
                    </div>
                    {/* <div className="list-button">
                        <img src="/svg/bookmark-white-icon.svg" alt="save chat" />
                        <img src="/svg/check-white-icon.svg" alt="read chat" />
                        <img src="/svg/delete-icon.svg" alt="delete chat" />
                    </div> */}
                </li>
            </button>
        </ul>

    )
}

export default Chat