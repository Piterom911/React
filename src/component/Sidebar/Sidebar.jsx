import React from 'react';
import s from './Sidebar.module.css';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <Header/>
            <Navigation/>
            <Footer/>
        </div>
    );
};

export default Sidebar;
