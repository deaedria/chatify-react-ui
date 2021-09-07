import React from 'react'
import { useHistory } from "react-router-dom";
import { AddChats } from "../../../Redux/Actions/chats"
import { useDispatch } from "react-redux"

const ContactList = (props) => {
    const { image, name, contact_id, user_id } = props
    console.log(image)

    let history = useHistory();
    const dispatch = useDispatch()

    const handleClick = (name, user_id, contact_id) => {
        dispatch(AddChats(user_id, contact_id))
        history.push(`/chatlist/message/${name.toLowerCase().split(' ').join('-')}/${contact_id}`)
    }

    return (
        <section className="call-list" onClick={() => handleClick(name, user_id, contact_id)}>
            <img src={image ? `${process.env.REACT_APP_IMG_URL}${image}` : `/img/no-photo.png`} alt="friend" className="profile-image" />
            <div className="text">
                <h4>{name}</h4>
            </div>
        </section>
    )

}

export default ContactList
