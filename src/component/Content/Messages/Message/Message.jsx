import React from 'react';
import s from './Message.module.css';
import {NavLink} from "react-router-dom";

const Message = (props) => {
    return (
        <p>Message: {props.id} {props.inout}<span className={s.message}>{props.message}</span></p>
    )
};

export default Message;
