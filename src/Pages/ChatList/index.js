import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
// import axios from 'axios';
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux"
import { FetchChats } from "../../Redux/Actions/chats"
import ChatSelection from '../../Components/ChatSelection';
import FirstNavWrapper from '../../Components/FirstNavWrapper';
import SearchAndCreate from '../../Components/SearchAndCreate';
import Chat from '../../Components/Chat'
import ActionMenu from '../../Components/ActionMenu';

const ChatList = () => {
    const { data: userToken } = useSelector((state) => state.UserLogin)
    const { data } = useSelector((state) => state.FetchChats)
    console.log(data)

    let history = useHistory();
    const dispatch = useDispatch()

    useEffect(() => {
        const dataToken = JSON.parse(atob(userToken.split('.')[1]));
        dispatch(FetchChats(userToken, dataToken))
    }, [dispatch, userToken])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-12 bg-color">
                    <nav className="main-menu">
                        {/* <button onClick={() => logout()}>Logout</button> */}
                        <FirstNavWrapper />
                        <ActionMenu />
                    </nav>
                    <SearchAndCreate />
                    <ChatSelection />
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
                                    onClick={() => history.push(`/chatlist/message/${item.contact_name.toLowerCase().split(' ').join('-')}/${item.contact_id}`)}
                                />
                            </>)
                        })}
                    </div>
                </div>
                <div className="col-md-8">
                    <aside className="message-box">
                        <p>Please select a chat to start messaging</p>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default withRouter(ChatList)
