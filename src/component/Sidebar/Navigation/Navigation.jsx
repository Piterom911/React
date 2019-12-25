import React from 'react';
import s from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <div className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}><NavLink className={s.link} activeClassName={s.active} to="/home">Home</NavLink></li>
        <li className={s.item}><NavLink className={s.link} activeClassName={s.active} to="/profile">Profile</NavLink></li>
        <li className={s.item}><NavLink className={s.link} activeClassName={s.active} to="/news">News</NavLink></li>
        <li className={s.item}><NavLink className={s.link} activeClassName={s.active} to="/music">Music</NavLink></li>
        <li className={s.item}><NavLink className={s.link} activeClassName={s.active} to="/messages">Messages</NavLink></li>
        <li className={s.item}><NavLink className={s.link} activeClassName={s.active} to="/about">About</NavLink></li>
      </ul>
      <form className={s.form}>
        <input className={s.search} placeholder="Search ... "/>
      </form>
      <ul>
        <li className={s.socialLink}>
          <a href="/#"><img src="//IT'S A HUGE QUESTION!!!"  alt=''/></a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
