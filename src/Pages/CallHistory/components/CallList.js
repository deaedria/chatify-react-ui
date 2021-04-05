import React, { Component } from 'react'

class CallList extends Component {
    render() {
        const {image, name, className, icon, altIcon, dateTime} = this.props
        return (
            <section className="call-list">
                <img src={"/img/" + image} alt="friend" className="profile-image" />
                <div className="text">
                    <h4>{name}</h4>
                    <p className={className}>
                        <img src={"/svg/" + icon} alt={altIcon} />
                        {dateTime}
                    </p>
                </div>
            </section>
        )
    }
}

export default CallList
