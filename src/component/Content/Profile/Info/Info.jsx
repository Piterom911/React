import React from 'react';
import s from './Info.module.css';

const Info = (props) => {
  return (
      <div className={s.info}>
          <h1 className={s.title}>All About My Profile</h1>
          <div><img className={s.contentHeader} src="https://pic.templetons.com/brad/pano/midpano/center-wide.jpg"  alt=''/></div>
          <div className={s.user}>
              <img className={s.userAvatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRYiYPTchtv5nsaMd6h1cfoWtGgM1RxPTrrQ7yaEg_ctM35b9&s"  alt=""/>
              <div className={s.userInfo}>
                  <h3>User Name</h3>
                  <div className={s.userData}>
                      <p>Date Of Birth: 17 January</p>
                      <p>City: Piter</p>
                      <p>Education: self-education</p>
                      <p>Web-site: piterom911.ru</p>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Info;
