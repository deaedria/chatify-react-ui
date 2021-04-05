import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class ActionMenu extends Component{
    menuToggle(){
        const toggleMenu1 = document.querySelector('.menu-list');
        toggleMenu1.classList.toggle('active') 

        document.querySelector('.menu-list-sm').style.removeProperty('visibility');
        const toggleMenu2 = document.querySelector('.menu-list-sm');
        toggleMenu2.classList.toggle('active-sm');
    }

    closeMenu(){
        document.querySelector('.menu-list-sm').style.visibility='hidden';
    }

    render(){
        return (
            <div className="action">
                <div className="menu" onClick={this.menuToggle.bind(this)}>
                    <img src="/svg/menu-icon.svg" alt="menu icon" />
                </div>
                <div className="menu-list">
                    <ul>
                        <li><img src="/svg/settings-white-icon.svg" alt="settings icon" /><Link to='/#'>Settings</Link></li>
                        <li><img src="/svg/contacts-white-icon.svg" alt="contacts icon" /><Link to='/#'>Contacts</Link></li>
                        <li><img src="/svg/calls-icon.svg" alt="calls icon" /><Link to={'/callhistory/' + this.props.match.params.email}>Calls</Link></li>
                        <li><img src="/svg/bookmark-white-icon.svg" alt="bookmark icon" /><Link to='/#'>Save messages</Link></li>
                        <li><img src="/svg/invite-white-icon.svg" alt="invite icon" /><Link to='/#'>Invite Friends</Link></li>
                        <li><img src="/svg/faq-white-icon.svg" alt="faq icon" /><Link to='/#'>Telegram FAQ</Link></li>
                    </ul>
                </div>
                <div className="menu-list-sm">
                    <div className="top-menu">
                        <div className="back" onClick={this.closeMenu.bind(this)}>
                            <img src="/svg/right-arrow-icon.svg" alt="back arrow icon" />
                        </div>
                        <img src="/svg/settings-blue-icon.svg" alt="settings blue icon" className="right" />
                    </div>
                    <div className="middle-menu">
                        <img src="/img/avatar-g.png" alt="profile account" />
                        <h5>Gloria Mckinney</h5>
                    </div>
                    <ul>
                        <li><img src="/svg/contacts-blue-icon.svg" alt="contacts blue icon" /><Link to='/#'>Contacts</Link></li>
                        <li><img src="/svg/calls-blue-icon.svg" alt="calls blue icon" className="call-sm" /><Link to={'/callhistory/' + this.props.match.params.email}>Calls</Link></li>
                        <li><img src="/svg/bookmark-blue-icon.svg" alt="bookmark blue icon" /><Link to='/#'>Save messages</Link></li>
                        <li><img src="/svg/invite-blue-icon.svg" alt="invite blue icon" /><Link to='/#'>Invite Friends</Link></li>
                        <li><img src="/svg/faq-blue-icon.svg" alt="faq blue icon" /><Link to='/#'>Telegram FAQ</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(ActionMenu)
