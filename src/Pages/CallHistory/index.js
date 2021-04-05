import React, { Component } from 'react';
import { withRouter } from "react-router";
import BackPage from '../../Components/BackPage';
import CallList from '../CallHistory/components/CallList'

class CallHistory extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12 bg-color">
                        <BackPage url={"chatlist/" + this.props.match.params.email} className="back-page back-page-chat" header="Call History" />
                        <br />
                        <div className="box-list">
                            <CallList image="avatar-f.png" name="Brother" className="get-call-replied" icon="grey-arrow-icon.svg" altIcon="grey arrow icon" dateTime="18.02.2020 at 19:30" />
                            <CallList image="avatar-b.png" name="Calvin Flores" className="get-call-rejected" icon="red-arrow-icon.svg" altIcon="red arrow icon" dateTime="18.02.2020 at 13:40" />
                            <CallList image="avatar-e.png" name="Mother 💓" className="calling-replied" icon="green-arrow-icon.svg" altIcon="green arrow icon" dateTime="18.02.2020 at 12:26" />
                            <CallList image="avatar-d.png" name="Soham Henry" className="get-call-replied" icon="grey-arrow-icon.svg" altIcon="grey arrow icon" dateTime="17.02.2020 at 19:30" />
                            <CallList image="avatar-e.png" name="Mother 💓" className="calling-replied" icon="green-arrow-icon.svg" altIcon="green arrow icon" dateTime="17.02.2020 at 15:26" />
                            <CallList image="avatar-e.png" name="Mother 💓" className="calling-replied" icon="green-arrow-icon.svg" altIcon="green arrow icon" dateTime="16.02.2020 at 13:30" />
                            <CallList image="avatar-b.png" name="Calvin Flores" className="get-call-rejected" icon="red-arrow-icon.svg" altIcon="red arrow icon" dateTime="15.02.2020 at 05:47" />
                            <CallList image="avatar-b.png" name="Calvin Flores" className="get-call-rejected" icon="red-arrow-icon.svg" altIcon="red arrow icon" dateTime="15.02.2020 at 05:00" />
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

export default withRouter(CallHistory)
