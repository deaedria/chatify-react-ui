import React, { useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import { DelMessages } from "../../../Redux/Actions/messages"
// import Hammer from 'hammerjs';
// import image from "../../../../chatify-app/"

const MessageList = (props) => {
    const {
        imgFriend,
        imgUser,
        senderId,
        content,
        status
    } = props
    const check = content.includes("/uploads/images/")

    const dispatch = useDispatch()
    const messageRef = useRef();
    let history = useHistory();

    const onClick = (id) => {
        dispatch(DelMessages(id))
    }

    const { contact } = useParams();

    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.scrollIntoView(
                {
                    behavior: 'smooth',
                    block: 'end'
                })
        }
    })

    if (parseInt(contact) === senderId) {
        return (
            <div className="row" ref={messageRef}>
                <div className="col-md-6">
                    <div className="single-message-left dropdown">
                        <img src={imgFriend} alt="profile contact" className="profile-image" />
                        <div className="dropbtn sender-content">
                            {check ?
                                <img className="content-image" src={`${process.env.REACT_APP_IMG_URL}${content}`} alt="content" /> :
                                <p>{content}</p>
                            }
                        </div>
                        <div className="dropdown-content left">
                            <img className="arrow-down" src="/svg/arrow-down.svg" alt="arrow down" /> :
                            <div className="btn">
                                <button onClick={() => onClick(props.id)}>delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (parseInt(contact) !== senderId) {
        return (
            <div className="row" ref={messageRef}>
                <div className="col-md-6 offset-md-6">
                    <div className="single-message-right dropdown">
                        <div className="dropbtn user-content">
                            {check ?
                                <img className="content-image" src={`${process.env.REACT_APP_IMG_URL}${content}`} alt="content" /> :
                                <p>{content}</p>
                            }
                        </div>
                        <span className="status">
                            {status === 'unread' ?
                                <img src={"/svg/check-grey-icon.svg"} alt="check" className="is-read" />
                                :
                                <img src={"/svg/check-blue-icon.svg"} alt="check" className="is-read" />
                            }
                        </span>
                        <div className="dropdown-content">
                            <img className="arrow-down" src="/svg/arrow-down.svg" alt="arrow down" />
                            <div className="btn">
                                <button onClick={() => onClick(props.id)}>delete</button>
                            </div>
                        </div>
                        <img src={"/" + imgUser} alt="profile contact" className="profile-image" />
                    </div>
                </div>
            </div>
        )
    }
}

export default MessageList

