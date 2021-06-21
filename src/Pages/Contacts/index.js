import React, { useEffect } from 'react';
import { withRouter } from "react-router";
import BackPage from '../../Components/BackPage';
import ContactList from '../Contacts/components/ContactList'
import { useDispatch, useSelector } from "react-redux"
import { FetchContacts } from "../../Redux/Actions/contacts"

const Contacts = () => {
    const { data: userToken } = useSelector((state) => state.UserLogin)
    const { data } = useSelector((state) => state.FetchContacts)

    const dispatch = useDispatch()

    useEffect(() => {
        const dataToken = JSON.parse(atob(userToken.split('.')[1]));
        dispatch(FetchContacts(dataToken))
    }, [dispatch, userToken])

    console.log(data)

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-12 bg-color">
                    <BackPage url="chatlist" className="back-page back-page-chat" header="Contact List" />
                    <br />
                    <div className="box-list">
                        {data && data.map((item) => {
                            return (<>
                                <ContactList 
                                    image={item.friend_photo} 
                                    name={item.contact_name}
                                    cl_id={item.cl_id}
                                    contact_id={item.contact_id}
                                    user_id={item.user_id}
                                    phone={item.phone}
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

export default withRouter(Contacts)
