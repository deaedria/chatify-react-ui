import React from 'react';
import { Link } from "react-router-dom";

const BackPage = (props) => {
    const link = (props.url !== undefined) ? props.url : '';
    // console.log(link)
    return (
        <div className={props.className}>
            <Link to={"/" + link}><img src="/svg/back-arrow-icon.svg" alt="back arrow icon" /></Link>
            <h3>{props.header !== undefined ? props.header : ''}</h3>
        </div>
    )
}

export default BackPage
