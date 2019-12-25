import React from 'react';
import s from './Messages.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Messages = (props) => {
    let itemData =[
        {id: 1, name: 'Anna Dogoda'},
        {id: 2, name: 'Arthur Jamison'},
        {id: 3, name: 'Winona Oak'},
        {id: 4, name: 'Den Luis'},
        {id: 5, name: 'Sam Smith'}
    ];

    let messagesData =[
        {id: 1, message: 'Roma sit amet.'},
        {id: 2, message: 'Hello dolor sit.'},
        {id: 3, message: 'This is true ipsum dolor sit amet.'},
        {id: 4, message: 'Everything I do, I do it for you! ipsum dolor sit.'},
        {id: 5, message: 'Lorem sit amet.'}
    ];

    let dialogItems = itemData.map( user => <DialogItem name={user.name} id={user.id}/> );
    let messages = messagesData.map( message => <Message id={message.id} inout="> " message={message.message}/> );

  return (
    <div className={s.messagesWrapper}>
        <h1>Messages</h1>
        <h2>This is your contact list</h2>
        <div className={s.dialogs}>
            <div className={s.names}>
                <h3>Contacts</h3>
                <ul className={s.namesList}>
                    { dialogItems }
                </ul>
            </div>
            <div className={s.messages}>
                <h3>Conversation with Name</h3>
                { messages }
            </div>
        </div>
    </div>
  );
};

export default Messages;
