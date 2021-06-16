import React from 'react'

const ErrFormat = ({ err }) => {
    // const removeItem = (el) => {
    //     // el.preventDefault();
    //     document.querySelector('.alert').style.display="none"
    // }

    return (
        <div className="alert">
           {err !== null?
            <li className="err-message">
                <strong>Error!</strong> {err} 
                {/* <span className="close-err" onClick={(e) => removeItem(e)}> [x] </span>  */}
            </li>: <div className="alert-none"></div>
            }
        </div>
    )
}

export default ErrFormat
