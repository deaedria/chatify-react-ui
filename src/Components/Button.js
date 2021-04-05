import React from 'react';

const Button = (props) => {
    const {type, className, img, alt, content} = props

    return (<>
        <button type={type} className={className}> 
            <img src={img} alt={alt}/> {content}
        </button>
    </>)
}

export default Button
