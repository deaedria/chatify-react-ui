import React, { useState } from 'react';
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import BackPage from '../../Components/BackPage';
import { AddContactsList } from '../../Redux/Actions/contacts'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../Components/Button';

const AddContacts = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    const { data: userToken } = useSelector((state) => state.UserLogin)
    const { isAdded, error, loading } = useSelector((state) => state.AddContactsList)

    const [formData, setFormData] = useState({
        contact_name: '',
        phone: '',
    })

    const onSubmit = (e) => {
        e.preventDefault();
        const dataToken = JSON.parse(atob(userToken.split('.')[1]));
        const regex = /^([0-9]{10,12})$/;

        if(formData.phone.match(regex)){
            dispatch(AddContactsList(formData, dataToken))
            if(isAdded === false){
                alert(error.message)
            }else{
                alert('Successfully Added')
                history.push(`/contacts`)
            }
        }else{
            alert('Enter Valid Phone Number !')
        }


    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-12 bg-color">
                    <BackPage url="contacts" className="back-page back-page-chat" header="Add Contact" />
                    {/* <br /> */}
                    <form onSubmit={(e) => onSubmit(e)} className="form-contact" autoComplete="off">
                        <div className="form-contact-group">
                            <label htmlFor="input-field">Contact Name</label><br /><br />
                            <input autoFocus type="text" id="name-contact" name="name" required onChange={(e) => {
                                setFormData({ ...formData, contact_name: e.target.value })
                            }} />
                        </div>
                        <div className="form-contact-group">
                            <label htmlFor="input-field">Phone</label><br /><br />
                            <input type="tel" id="phone-contact" name="phone" required onChange={(e) => {
                                setFormData({ ...formData, phone: e.target.value })
                            }} />
                        </div>
                        {/* {loading ? (
                            <Button disabled={loading} type="submit" className="submit-login" content="Loading..." onClick={(e) => onSubmit(e)} />
                        ) : (
                        )}  */}
                        <Button type="submit" className="contact-add-footer" img="/img/right-arrow.png" onClick={(e) => onSubmit(e)} />
                    </form>
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

export default withRouter(AddContacts)