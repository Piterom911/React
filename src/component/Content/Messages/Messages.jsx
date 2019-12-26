import React from 'react';
import s from './Messages.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Messages = (props) => {
    let dialogItems = props.dialogMessages.dialogItem.map(user => <DialogItem name={user.name} id={user.id}/>);
    let messages = props.dialogMessages.dialogMessages.map(message => <Message id={message.id} inout="> " message={message.message}/>);

    let newMessage = React.createRef();
    let sendMessage = () => {
        let message = newMessage.current.value;
        alert(message)
    };
    return (
        <div className={s.messagesWrapper}>
            <h1>Messages</h1>
            <h2>This is your contact list</h2>
            <div className={s.dialogs}>
                <div className={s.names}>
                    <h3>Contacts</h3>
                    <ul className={s.namesList}>
                        {dialogItems}
                    </ul>
                </div>
                <div className={s.messages}>
                    <h3>Conversation with Name</h3>
                    {messages}
                    <textarea ref={newMessage} name="newMessage" id="SMS" cols="30" rows="10" placeholder="Your message"/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Messages;
