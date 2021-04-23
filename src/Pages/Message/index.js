import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux"
import { UserLogout } from "../../Redux/Actions/users"
import { FetchChats } from "../../Redux/Actions/chats"
import { FetchMessages, AddMessages } from "../../Redux/Actions/messages"
// import axios from 'axios';
// import BackPage from '../../Components/BackPage';
import Chat from '../../Components/Chat';
import ChatSelection from '../../Components/ChatSelection';
import FirstNavWrapper from '../../Components/FirstNavWrapper';
import SearchAndCreate from '../../Components/SearchAndCreate';
import ActionMenu from '../../Components/ActionMenu';
import MessageList from '../Message/components/MessageList';
import HeaderMessage from '../Message/components/HeaderMessage';

const Message = () => {
    const { data: userToken } = useSelector((state) => state.UserLogin)
    const { data: dataMessage, loading } = useSelector((state) => state.FetchMessages)
    const { data, loading: isLoading } = useSelector((state) => state.FetchChats)

    let history = useHistory();
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(UserLogout())
    }

    const [formData, setFormData] = useState({
        content: '',
        sender_id: ''
    })

    const { contact } = useParams();

    useEffect(() => {
        const dataToken = JSON.parse(atob(userToken.split('.')[1]));
        dispatch(FetchChats(userToken, dataToken))
        dispatch(FetchMessages(userToken, dataToken, contact))
    }, [contact, dispatch, userToken])

    // const onChange = (e) => {
    //     let file = e.target.files
    //     let files = file[0]
    //     console.log(files)

    //     switch (e.target.name) {
    //         case 'content':
    //             document.getElementById("input").value =e.target.files[0]
    //             // setFormData({ ...form, content: e.target.files[0] })
    //             setFormData({ ...form, content: e.target.files[0] })
    //             break;
    //         default:
    //             setFormData({ ...form, [e.target.name]: e.target.value })
    //     }
    // }

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const dataToken = JSON.parse(atob(userToken.split('.')[1]));

            setFormData({ ...formData, content: e.target.value, sender_id: dataToken.user_id })
            if(formData.content !== ''){
                dispatch(AddMessages(userToken, dataToken, contact, formData))
                dispatch(FetchMessages(userToken, dataToken, contact))
                dispatch(FetchChats(userToken, dataToken))
                document.getElementById("input").value = "";
            }else{
                alert("your massage must be filled")
            }

        }
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-12 bg-color hide-chat">
                    <nav className="main-menu">
                        <button onClick={() => logout()}>Logout</button>
                        <FirstNavWrapper />
                        <ActionMenu />
                    </nav>
                    <SearchAndCreate />
                    <ChatSelection />
                    {isLoading ? <h6 className="chat-loading">Loading...</h6> :
                        <div className="box-list chat-scroll">
                            {data && data.map((item) =>
                                <Chat
                                    imgProfile={item.friend_photo}
                                    name={item.contact_name}
                                    imgNotif={item.notification}
                                    text={item.last_message}
                                    time={item.to_char}
                                    onClick={() => history.push(`/chatlist/message/${item.contact_name.split(' ').join('-')}/${item.contact_id}`)}
                                // badgeClass="badge round"
                                // badge="2"
                                />)
                            }
                        </div>
                    }
                </div>
                <div className="col-md-8 col-sm-12">
                    <aside className="message-box show-message">
                        {dataMessage && dataMessage.map((item) =>
                            <HeaderMessage
                                imgContact={item.friend_photo}
                                contactName={item.contact_name}
                            />)
                        }
                        {loading ? <h5>Loading...</h5> :
                            <section className="message box-list">
                                {dataMessage && dataMessage.map((item) =>
                                    <MessageList
                                        imgFriend={item.friend_photo}
                                        imgUser={item.photo_profile}
                                        senderId={item.sender_id}
                                        content={item.content}
                                    />)
                                }
                            </section>
                        }
                        <footer className="bottom-wrapper">
                            <div className="input-message-box">
                                <div className="input-wrapper">
                                    <input id="input" type="text" placeholder="Type your message..." required onInput={(e) => {
                                        setFormData({ ...formData, content: e.target.value })
                                    }} onKeyPress={(e) => onKeyPress(e)} />
                                    <span className="input-wrapper-right">
                                        {/* <input className="create" type="file" name="content" accept="image/*" onChange={(e) => onChange(e)} /> */}
                                        <img src="/svg/plus-icon.svg" alt="face icon" className="sticker" />
                                        <img src="/svg/face-icon.svg" alt="face icon" className="sticker" />
                                        <img src="/svg/camera-icon.svg" alt="camera icon" />
                                    </span>
                                </div>
                            </div>
                        </footer>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Message)

