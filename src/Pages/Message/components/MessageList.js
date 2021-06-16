import React from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { DelMessages } from "../../../Redux/Actions/messages"
// import Hammer from 'hammerjs';
// import image from "../../../../chatify-app/"

const MessageList = (props) => {
    const {
        imgFriend,
        imgUser,
        senderId,
        content
    } = props
    const check = content.includes("/uploads/images/")

    // const { loading: isLoading } = useSelector((state) => state.DelMessages)
    const dispatch = useDispatch()

    const onClick = (id) => {
        dispatch(DelMessages(id))
        // if(isLoading === false){
        //     window.location.reload()
        // }
    }

    const { contact } = useParams();
    // const split = name.split('-').join(' ');
    // console.log(typeof contact)
    if (parseInt(contact) === senderId) {
        return (
            <div className="row">
                <div className="col-md-6">
                    <div className="single-message-left dropdown">
                        <img src={imgFriend} alt="profile contact" className="profile-image" />
                        <div className="dropbtn sender-content">
                            {check ?
                                <img className="content-image" src={`http://localhost:5000/${content}`} alt="content" /> :
                                <p>{content}</p>
                            }
                        </div>
                        <div className="dropdown-content left">
                            <button onClick={() => onClick(props.id)}>delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (parseInt(contact) !== senderId) {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-6">
                    <div className="single-message-right dropdown">
                        <div className="dropbtn user-content">
                            {check ?
                                <img className="content-image" src={`http://localhost:5000/${content}`} alt="content" /> :
                                <p>{content}</p>
                            }
                        </div>
                        <div className="dropdown-content">
                            <button onClick={() => onClick(props.id)}>delete</button>
                        </div>
                        <img src={"/" + imgUser} alt="profile contact" className="profile-image" />
                    </div>
                </div>
            </div>
        )
    }
}

export default MessageList

