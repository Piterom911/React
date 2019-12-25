import React from 'react';
import s from './Profile.module.css';
import Info from "./Info/Info";
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return (
        <main className={s.content}>
            <Info />
            <Posts />
        </main>
    )
};

export default Profile;
