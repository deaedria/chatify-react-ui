import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import BackPage from '../../Components/BackPage';
import Chat from '../../Components/Chat';
import ChatSelection from '../../Components/ChatSelection';
import FirstNavWrapper from '../../Components/FirstNavWrapper';
import SearchAndCreate from '../../Components/SearchAndCreate';
import ActionMenu from '../../Components/ActionMenu';

class Message extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 list-md bg-color hide-chat">
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
                    <div className="col-md-8 col-sm-12">
                        <aside className="message-box show-message">
                            <header className="top-wrapper">
                                <BackPage url={"chatlist/" + this.props.match.params.email} className="back-page back-sm-device"/>
                                <img src="/img/avatar-e.png" alt="profile contact" />
                                <div className="text">
                                    <h6>Mother 💓</h6>
                                    <p>Online</p>
                                </div>
                            </header>
                            <section className="message box-list">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-message-left">
                                            <img src="/img/avatar-e.png" alt="profile contact" className="profile-image" />
                                            <div className="sender-content">
                                                <p>Hi, son, how are you doing?
                                                Today, my father and I went to
                                                buy a car, bought a cool car.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 offset-md-6">
                                        <div className="single-message-right">
                                            <div className="user-content">
                                                <p>Oh! Cool Send me photo</p>
                                            </div>
                                            <img src="/img/avatar-g.png" alt="profile contact" className="profile-image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-message-left">
                                            <img src="/img/avatar-e.png" alt="profile contact" className="profile-image" />
                                            <div className="sender-content">
                                                <p>Ok😉</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-message-left">
                                            <img src="/img/avatar-e.png" alt="profile contact" className="profile-image" />
                                            <div className="sender-content-image">
                                                <img src="/img/car.png" alt="car" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-message-left">
                                            <img src="/img/avatar-e.png" alt="profile contact" className="profile-image" />
                                            <div className="sender-content">
                                                <p>Will we arrive tomorrow?</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 offset-md-6">
                                        <div className="single-message-right">
                                            <div className="user-content">
                                                <p>Oh! Cool Send me photo</p>
                                            </div>
                                            <img src="/img/avatar-g.png" alt="profile contact" className="profile-image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-message-left">
                                            <img src="/img/avatar-e.png" alt="profile contact" className="profile-image" />
                                            <div className="sender-content">
                                                <p>Thankyou</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-message-left">
                                            <img src="/img/avatar-e.png" alt="profile contact" className="profile-image" />
                                            <div className="sender-content">
                                                <p>Thankyou</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-message-left">
                                            <img src="/img/avatar-e.png" alt="profile contact" className="profile-image" />
                                            <div className="sender-content">
                                                <p>Thankyou</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-message-left">
                                            <img src="/img/avatar-e.png" alt="profile contact" className="profile-image" />
                                            <div className="sender-content">
                                                <p>Thankyou</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <footer className="bottom-wrapper">
                                <div className="input-message-box">
                                    <div className="input-wrapper">
                                        <input type="text" placeholder="Type your message..." />
                                        <span className="input-wrapper-right">
                                            <img src="/svg/plus-icon.svg" alt="plus icon" className="create" />
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
}

export default withRouter(Message)
