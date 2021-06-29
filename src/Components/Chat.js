import React from 'react';
import moment, { updateLocale } from 'moment'
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import { DelChats } from "../Redux/Actions/chats"

const Chat = (props) => {
    const {
        imgProfile,
        name,
        text,
        time,
        imgCheck,
        onClick,
        sc_id,
        unreadSum
    } = props
    const check = text?.includes("/uploads/images/")

    const dispatch = useDispatch()
    let history = useHistory();

    return (
        <ul className="list">
            <button onClick={onClick} className="button-chat">
                {/* <Swipeout right={swipeoutBtns} backgroundColor="transparent">
                    <View> */}
                <li className="chat-list list-item">
                    <img src={"../../../../" + imgProfile} alt="friend" className="profile-image" />
                    <div className="text">
                        <h6>{name}
                            {parseInt(unreadSum) > 0 ?
                                <img src="/svg/bell-icon.svg" alt="bell icon" /> : ""
                            }
                        </h6>
                        <p className="other-account">
                            {check ?
                                <img className="content-image" src={`http://localhost:5000/${text}`} alt="content" /> :
                                <p>{text}</p>
                            }
                        </p>
                        {/* <p className={textClass}>
                            {(textClass === "other-account") ? text : "Me: " + text}
                        </p> */}
                    </div>
                    <div className="chat-list-right align-items-end">
                        <div className="time">
                            {time ? moment(time).isSame(moment(), 'day') ?
                                moment(time).format("HH:mm")
                                :
                                moment(time).fromNow(updateLocale("en", {
                                    relativeTime: {
                                        future: "in %s",
                                        past: "%s",
                                        s: "sec",
                                        m: "%dm ago",
                                        mm: "%dm ago",
                                        h: "%dh ago",
                                        hh: "%dh ago",
                                        d: "%dd ago",
                                        dd: "%dd ago",
                                        M: "%dmth",
                                        MM: "%dmth ago",
                                        y: "y ago",
                                        yy: "%dy ago"
                                    }
                                }))
                                :
                                ''
                            }
                        </div>
                        <div className="badge round">
                            {parseInt(unreadSum) > 0 ?
                                unreadSum
                                : ''
                            }
                        </div>
                    </div>
                    <div className="list-button">
                        <img className="dot-menu" src="/svg/dot-menu.svg" alt="menu" />
                        <div className="btn-icon">
                            <img src="/svg/bookmark-white-icon.svg" alt="save chat" />
                            <img src="/svg/check-white-icon.svg" alt="read chat" />
                            <img src="/svg/delete-icon.svg" alt="delete chat" onClick={() => { dispatch(DelChats(sc_id)); history.go(0) }} />
                        </div>
                    </div>
                </li>
                {/* </View>
                </Swipeout> */}
            </button>

        </ul>

    )
}

export default Chat
