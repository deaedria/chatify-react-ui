import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import ChatSelection from '../../Components/ChatSelection';
import FirstNavWrapper from '../../Components/FirstNavWrapper';
import SearchAndCreate from '../../Components/SearchAndCreate';
import Chat from '../../Components/Chat'
import ActionMenu from '../../Components/ActionMenu';

class ChatList extends Component {    
    render() {
        // console.log(this.props.match.params.email)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12 bg-color">
                        <nav className="main-menu">
                            <FirstNavWrapper />
                            <ActionMenu />
                        </nav>
                        <SearchAndCreate />
                        <ChatSelection />
                        <div className="box-list chat-scroll">
                            <Chat 
                                imgProfile="avatar-a.png" 
                                name="Theresa Webb" 
                                imgNotif="bell-icon.svg" 
                                textClass="other-account" 
                                text="Why did you do that" 
                                time="15:20" 
                                badgeClass="badge round" 
                                badge="2" 
                            />
                            <Chat 
                                imgProfile="avatar-b.png" 
                                name="Calvin Flores" 
                                textClass="other-account" 
                                text="Hi, bro! Come to my house!" 
                                time="15:13" 
                                badgeClass="badge round" 
                                badge="1" 
                            />
                            <Chat 
                                imgProfile="avatar-c.png" 
                                name="Gregory Bell" 
                                textClass="other-account" 
                                text="Will you stop ignoring me?" 
                                time="15:13" 
                                badgeClass="badge rounded-pill" 
                                badge="164" 
                            />
                            <Chat 
                                imgProfile="avatar-d.png" 
                                name="Soham Henry" 
                                imgNotif="bell-icon.svg" 
                                textClass="account-owner" 
                                text="Bro, just fuck off" 
                                time="8:30" 
                                imgCheck="check-blue-icon.svg"
                                altCheck="check blue icon"
                            />
                            <Chat 
                                imgProfile="avatar-e.png" 
                                name="Mother 💓" 
                                textClass="account-owner" 
                                text="Yes, of course come, ..." 
                                time="7:20" 
                                imgCheck="check-grey-icon.svg"
                                altCheck="check grey icon"
                                linkTo={"/message/" + this.props.match.params.email}
                            />
                            <Chat 
                                imgProfile="avatar-f.png" 
                                name="Brother" 
                                textClass="other-account" 
                                text="Ok. Good bay!" 
                                time="Yesterday" 
                            />                          
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
}

export default withRouter(ChatList)