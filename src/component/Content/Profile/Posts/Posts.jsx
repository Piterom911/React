import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
    let posts = props.postsData.map(post => <Post text={post.text} likes={post.likesCount}/>);

    let newElement = React.createRef();

    let addPost = () => {
        let text = newElement.current.value;
        alert(text);
    };

    return (
        <div className={s.posts}>
            <form>
                <p>My posts!</p>
                <textarea ref={newElement} placeholder="your news..."/>
                <button onClick={ addPost }>Send</button>
            </form>
            <div className={s.posted}>
                {posts}
            </div>
        </div>
    );
};

export default Posts;
