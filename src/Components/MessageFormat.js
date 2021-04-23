import React from 'react'

const MessageFormat = ({ message }) => {
    return (
        <div className="alert hide-err">
           {message !== ''?
            <div className="success-message">
                {message}  
            </div> : <div className="alert-none"></div>
            }
        </div>
    )
}

export default MessageFormat
