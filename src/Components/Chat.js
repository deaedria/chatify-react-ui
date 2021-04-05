import React from 'react';
import { Link } from 'react-router-dom';

const Chat = (props) => {
    const {
        imgProfile,
        name,
        imgNotif,
        textClass,
        text,
        time,
        imgCheck,
        altCheck,
        badgeClass,
        badge,
        linkTo
    } = props

    return (
        <Link to={linkTo !== undefined ? linkTo : ''}>
            <section className="chat-list">
                <img src={"/img/" + imgProfile} alt="friend" className="profile-image" />
                <div className="text">
                    <h6>{name}
                        {imgNotif !== undefined ? 
                            <img src={"/svg/" + imgNotif} alt="bell icon" /> : "" 
                        }
                    </h6>
                    <p className={textClass}>
                        {(textClass === "other-account") ? text : "Me: " + text}
                    </p>
                </div>
                <div className="chat-list-right align-items-end">
                    <div className="time">{time}</div>
                    <div className={badgeClass}>{badge}</div>
                    {imgCheck !== undefined ? 
                        <img src={"/svg/" + imgCheck} alt={altCheck} /> : "" 
                    }
                </div>
            </section>
        </Link>
    )
}

export default Chat