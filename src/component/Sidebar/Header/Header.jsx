import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.header}>
      <h1 className={s.title}>
        <a href="#" className={s.companyName}>RDCorp</a>
      </h1>
      <h2 className={s.motto}>The motto of our company.</h2>
    </div>
  );
}

export default Header;
