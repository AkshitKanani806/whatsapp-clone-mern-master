import { Avatar } from '@material-ui/core';
import React from 'react';

// IMPORTING CSS
import './SidebarChat.css';

function SidebarChat() {
    return (

        <div className="sidebarChat">
            
            <Avatar/>

            <div className="sidebarChat__info">
                <h2> Room Name </h2>
                <p>This is last Message </p>
            </div>

        </div>
    
    )
}

export default SidebarChat;
