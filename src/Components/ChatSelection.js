import React from 'react'

const ChatSelection = () => {
    return (
        <section className="chat-selection">
            <div className="item" name="all">All</div>
            <div className="item active" name="important">Important</div>
            <div className="item" name="unread">Unread</div>
            <div className="item" name="read">Read</div>
        </section>
    )
}

export default ChatSelection
