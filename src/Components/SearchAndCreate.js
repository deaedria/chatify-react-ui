import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { SearchMessages } from "../Redux/Actions/messages"

const SearchAndCreate = () => {
    const { data: userToken } = useSelector((state) => state.UserLogin)

    const dispatch = useDispatch()

    const [formInput, setFormInput] = useState({
        keyword: ''
    })

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const dataToken = JSON.parse(atob(userToken.split('.')[1]));

            if (formInput.keyword !== '') {
                dispatch(SearchMessages(formInput.keyword, dataToken.user_id, userToken))
                // document.getElementById("set-input").value = "";           
            } else {
                // alert("your massage must be filled")
            }
        }
    }

    return (
        <section className="search-and-create">
            <div className="search-box">
                <div className="input-wrapper">
                    <img src="/svg/search-grey-icon.svg" alt="search grey icon" />
                    <input autoComplete="off" id="set-input" type="text" placeholder="Type your message..." onInput={(e) => {
                        setFormInput({ ...formInput, keyword: e.target.value })
                    }} onKeyPress={(e) => onKeyPress(e)} />
                </div>
            </div>
            <img src="/svg/plus-icon.svg" alt="plus icon" className="create" />
        </section>
    )
}

export default SearchAndCreate
