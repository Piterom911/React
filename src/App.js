import React from 'react';
import './App.css';
import Sidebar from './component/Sidebar/Sidebar';
import Content from './component/Content/Content';
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Sidebar/>
                <Content state={props.state} sendPost={props.sendPost} sendMessage={props.sendMessage}/>
            </div>
        </BrowserRouter>
    );
};

export default App;
