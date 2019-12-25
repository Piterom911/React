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
                <Content dialogMessages={props.dialogMessages} postsData={props.postsData}
                         dialogItem={props.dialogItem}/>
            </div>
        </BrowserRouter>
    );
};

export default App;
