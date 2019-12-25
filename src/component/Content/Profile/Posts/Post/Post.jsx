import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
      <p className={s.post}>
          {props.text}
          <span className={s.likes}>{props.likes} likes =)</span>
      </p>
  );
};

export default Post;
