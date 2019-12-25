import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <div className={s.footer}>
      <footer>
          <a href="/">RDCorp</a> © 2019 <br />
        Proudly published with <a href="/">Ghost</a><br />
        and Paperleaf theme by <a href="/">NvsLbs</a><br />
      </footer>
    </div>
  );
};

export default Footer;
