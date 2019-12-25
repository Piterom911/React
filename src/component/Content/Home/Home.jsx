import React from 'react';
import s from './Home.module.css';

const Home = (props) => {
  return (
    <div>
        {props.name}
        This will be my first time hiking in the mountings!
    </div>
  );
}

export default Home;
