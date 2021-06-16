import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const ActionSubMenu = () => {
    const menuToggle = () => {
        const toggleMenu1 = document.querySelector('.menu-list-sub');
        toggleMenu1.classList.toggle('active')
    }

    const [formData, setFormData] = useState({
        content: '',
        sender_id: ''
    })

    const onChange = (e) => {
        let file = e.target.files
        let files = file[0]
        console.log(files)

        if (!files.type.match("image.*")) {
            alert("Please select image only")
        } else {
            let reader = new FileReader()

            reader.addEventListener("load", function () {
                // alert(reader.result)
                document.getElementById("input").value = files.name

                setFormData({ ...formData, content: files })
            }, false)

            if (file) {
                reader.readAsDataURL(files)
            }
        }

        // switch (e.target.name) {
        //     case 'content':
        //         document.getElementById("input").value = e.target.files[0].name
        //         // setFormData({ ...form, content: e.target.files[0] })
        //         setFormData({ ...form, content: e.target.files[0] })
        //         break;
        //     default:
        //         setFormData({ ...form, [e.target.name]: e.target.value })
        // }
    }

    return (
        // <span className="input-wrapper-right">
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
        // </span>
    )
}

// <div className="action">
//     <div className="menu" onClick={this.menuToggle.bind(this)}>
//         <img src="/svg/menu-icon.svg" alt="menu icon" />
//     </div>
// <div className="menu-list">
//     <ul>
//         <li><img src="/svg/settings-white-icon.svg" alt="settings icon" /><Link to='/#'>Settings</Link></li>
//         <li><img src="/svg/contacts-white-icon.svg" alt="contacts icon" /><Link to='/#'>Contacts</Link></li>
//         <li><img src="/svg/calls-icon.svg" alt="calls icon" /><Link to={'/callhistory/' + this.props.match.params.email}>Calls</Link></li>
//         <li><img src="/svg/bookmark-white-icon.svg" alt="bookmark icon" /><Link to='/#'>Save messages</Link></li>
//         <li><img src="/svg/invite-white-icon.svg" alt="invite icon" /><Link to='/#'>Invite Friends</Link></li>
//         <li><img src="/svg/faq-white-icon.svg" alt="faq icon" /><Link to='/#'>Telegram FAQ</Link></li>
//     </ul>
// </div>
//     <div className="menu-list-sm">
//         <div className="top-menu">
//             <div className="back" onClick={this.closeMenu.bind(this)}>
//                 <img src="/svg/right-arrow-icon.svg" alt="back arrow icon" />
//             </div>
//             <img src="/svg/settings-blue-icon.svg" alt="settings blue icon" className="right" />
//         </div>
//         <div className="middle-menu">
//             <img src="/img/avatar-g.png" alt="profile account" />
//             <h5>Gloria Mckinney</h5>
//         </div>
//         <ul>
//             <li><img src="/svg/contacts-blue-icon.svg" alt="contacts blue icon" /><Link to='/#'>Contacts</Link></li>
//             <li><img src="/svg/calls-blue-icon.svg" alt="calls blue icon" className="call-sm" /><Link to={'/callhistory/' + this.props.match.params.email}>Calls</Link></li>
//             <li><img src="/svg/bookmark-blue-icon.svg" alt="bookmark blue icon" /><Link to='/#'>Save messages</Link></li>
//             <li><img src="/svg/invite-blue-icon.svg" alt="invite blue icon" /><Link to='/#'>Invite Friends</Link></li>
//             <li><img src="/svg/faq-blue-icon.svg" alt="faq blue icon" /><Link to='/#'>Telegram FAQ</Link></li>
//         </ul>
//     </div>
// </div>

export default withRouter(ActionSubMenu)
