import React from 'react';
import './App.css';
import Sidebar from './component/Sidebar/Sidebar';
import Content from './component/Content/Content';
import {BrowserRouter} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
        <div className="wrapper">
            <Sidebar />
            <Content />
        </div>
    </BrowserRouter>
  );
};

export default App;
