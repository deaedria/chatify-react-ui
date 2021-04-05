import React from 'react'

const SearchAndCreate = () => {
    return (
        <section className="search-and-create">
            <div className="search-box">
                <div className="input-wrapper">
                    <img src="/svg/search-grey-icon.svg" alt="search grey icon" />
                    <input type="text" placeholder="Type your message..." />
                </div>
            </div>
            <img src="/svg/plus-icon.svg" alt="plus icon" className="create" />
        </section>
    )
}

export default SearchAndCreate
