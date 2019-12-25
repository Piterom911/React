import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <li className={s.nameItem}><NavLink className={s.linkItem} activeClassName={s.active} to={"/messages/" + props.id}>{props.name}</NavLink></li>
    )
};

export default DialogItem;
