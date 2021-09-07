import React, { useEffect, useState } from 'react';
import { useHistory, useParams, useLocation } from "react-router-dom";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux"
import { FetchChats } from "../../Redux/Actions/chats"
import { FetchMessages, AddMessages, UpdStatusMessages } from "../../Redux/Actions/messages"
import { Link } from "react-router-dom";
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
    // console.log(data)

    let history = useHistory();
    // let location = useLocation();
    const dispatch = useDispatch()

    const menuToggle = () => {
        const toggleMenu1 = document.querySelector('.menu-list-sub');
        toggleMenu1.classList.toggle('active')
    }

    const [formData, setFormData] = useState({
        content: '',
        sender_id: ''
    })

    const { contact } = useParams();

    const dataHeader = data.find((element) => {
        return contact == element.contact_id;
    })

    useEffect(() => {
        const dataToken = JSON.parse(atob(userToken.split('.')[1]));
        dispatch(UpdStatusMessages(dataHeader?.sc_id, contact, dataToken.user_id));
        dispatch(FetchMessages(userToken, dataToken, contact))
        dispatch(FetchChats(userToken, dataToken))
    }, [contact, dataHeader?.sc_id, dispatch, userToken])

    const onChange = (e) => {
        let file = e.target.files
        let files = file[0]

        if (!files.type.match("image.*")) {
            alert("Please select image only")
        } else {
            const dataToken = JSON.parse(atob(userToken.split('.')[1]));
            const myData = new FormData();
            myData.append('content', e.target.files[0]);
            myData.append('sender_id', dataToken.user_id);

            // console.log(JSON.stringify(myData.content))
            dispatch(AddMessages(userToken, dataToken, contact, myData))
            dispatch(FetchMessages(userToken, dataToken, contact))
            dispatch(FetchChats(userToken, dataToken))
            window.location.reload(false)
            // document.querySelector(".box-list").scrollTop = document.querySelector(".box-list").scrollHeight
        }
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const dataToken = JSON.parse(atob(userToken.split('.')[1]));
            console.log(formData.content?.length)

            let myData = {
                content: e.target.value,
                sender_id: dataToken.user_id
            }
            // setFormData({ ...formData, content: e.target.value, sender_id: dataToken.user_id })
            if (formData.content !== '') {
                dispatch(AddMessages(userToken, dataToken, contact, myData))
                dispatch(FetchMessages(userToken, dataToken, contact))
                dispatch(FetchChats(userToken, dataToken))
                document.getElementById("input").value = "";
                window.location.reload(false)
            } else {
                // alert("your massage must be filled")
            }

        }
    }

    const updStatus = (contact_name, sc_id, contact_id) => {
        const dataToken = JSON.parse(atob(userToken.split('.')[1]));
        dispatch(UpdStatusMessages(sc_id, contact_id, dataToken.user_id));
        dispatch(FetchChats(userToken, dataToken))
        history.push(`/chatlist/message/${contact_name.toLowerCase().split(' ').join('-')}/${contact_id}`);
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-12 bg-color hide-chat">
                    <nav className="main-menu">
                        <FirstNavWrapper />
                        <ActionMenu />
                    </nav>
                    <SearchAndCreate />
                    <ChatSelection />
                    {isLoading ? <p></p> :
                        <div className="box-list chat-scroll">
                            {data && data.map((item) => {
                                return (<>
                                    <Chat
                                        imgProfile={item.friend_photo}
                                        name={item.contact_name}
                                        imgNotif={item.notification}
                                        text={item.last_message}
                                        time={item.last_time}
                                        sc_id={item.sc_id}
                                        unreadSum={item.unread_messages}
                                        onClick={() => updStatus(item.contact_name, item.sc_id, item.contact_id)}
                                    />
                                </>)
                            })}
                        </div>
                    }
                </div>
                <div className="col-md-8 col-sm-12">
                    <aside className="message-box show-message">
                        {dataHeader ?
                            <HeaderMessage
                                imgContact={dataHeader?.friend_photo}
                                contactName={dataHeader?.contact_name}
                            />
                            : <p></p>
                        }
                        {loading ? <p></p> :
                            <section className="message box-list" id="box">
                                {dataMessage && dataMessage.map((item) =>
                                    <MessageList
                                        imgFriend={item.friend_photo}
                                        imgUser={item.photo_profile}
                                        senderId={item.sender_id}
                                        content={item.content}
                                        id={item.scm_id}
                                        status={item.status}
                                    />)
                                }
                            </section>
                        }
                        <footer className="bottom-wrapper">
                            <div className="input-message-box">
                                <div className="input-wrapper">
                                    <input autoComplete="off" id="input" type="text" placeholder="Type your message..." required onInput={(e) => {
                                        setFormData({ ...formData, content: e.target.value })
                                    }} onKeyPress={(e) => onKeyPress(e)} />
                                    <span className="input-wrapper-right">
                                        <span className="menu-sub" onClick={menuToggle}>
                                            <img src="/svg/plus-icon.svg" alt="plus icon" className="create" />
                                        </span>
                                        <img src="/svg/face-icon.svg" alt="face icon" className="sticker" />
                                        <img src="/svg/camera-icon.svg" alt="camera icon" />

                                        <div className="menu-list-sub">
                                            <ul>
                                                <li>
                                                    <label>
                                                        <img src="/svg/image-icon.svg" alt="settings icon" className="open-image" />Image
                                                        <input className="create" type="file" name="content" accept="image/*" onChange={(e) => onChange(e)} />
                                                    </label>
                                                </li>
                                                <li><img src="/svg/documents-icon.svg" alt="contacts icon" /><Link to='#'>Documents</Link></li>
                                                <li><img src="/svg/contacts-white-icon.svg" alt="calls icon" /><Link to='#'>Contacts</Link></li>
                                                <li><img src="/svg/location-icon.svg" alt="bookmark icon" /><Link to='#'>Location</Link></li>
                                            </ul>
                                        </div>
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

