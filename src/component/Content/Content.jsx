import React from 'react';
import Home from './Home/Home';
import s from './Content.module.css';
import {Route} from 'react-router-dom'
import Profile from "./Profile/Profile";
import News from "./News/News";
import Messages from "./Messages/Messages";
import About from "./About/About";

const Content = () => {
  return (
    <div className={s.content}>
        <Route path='/profile' render={ () => <Profile />} />
        <Route path='/home' component={ () => <Home />} />
        <Route path='/news' component={ () => <News />} />
        <Route path='/messages' component={ () => <Messages />} />
        <Route path='/about' component={ () => <About />} />
    </div>
  );
};

export default Content;
