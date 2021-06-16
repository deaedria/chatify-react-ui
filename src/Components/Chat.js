import React from 'react';
import moment from 'moment'
// import { Image, View } from "react-native-web";
// import Swipeout from "react-native-swipeout";
// import Bookmark from "../../public/svg/bookmark-white-icon.svg";
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
    const check = text.includes("/uploads/images/")

    // const swipeoutBtns = [
    //     {
    //         component:
    //             (
    //                 <View>
    //                     <Image source='/svg/bookmark-white-icon.svg' />
    //                 </View>
    //             )
    //     }
    // ]

    // document.querySelector("ul").addEventListener("click", (e) => {
    //     const li = e.target.closest("li");
    //     const btn = e.target.closest(".list-button");
    //     if (li && li.scrollLeft === 0) {
    //       li.scrollBy({
    //         left: 1,
    //         behavior: "smooth"
    //       });
    //     } else if (!btn && li) {
    //       li.scrollBy({
    //         left: -1,
    //         behavior: "smooth"
    //       });
    //     } else if (btn && li) {
    //       li.remove();
    //     }
    //   });

    return (
        <ul className="list">
            <button onClick={onClick} className="button-chat">
                {/* <Swipeout right={swipeoutBtns} backgroundColor="transparent">
                    <View> */}
                        <li className="chat-list list-item">
                            <img src={"../../../../" + imgProfile} alt="friend" className="profile-image" />
                            <div className="text">
                                <h6>{name}
                                    {imgNotif !== 'off' ?
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
                                <div className="time">{moment(time).isSame(moment(), 'day') ? moment(time).format("HH:mm") : moment(time).fromNow()}</div>
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
                    {/* </View>
                </Swipeout> */}
            </button>

        </ul>

    )
}

export default Chat
