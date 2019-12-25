import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
    let postsData = [
        {id: 1, likesCount: 12, text: 'Hey, why am I so happy?'},
        {id: 2, likesCount: 10, text: 'This is our new program for helping people.'}
    ];

    let posts = postsData.map( post => <Post text={post.text} likes={post.likesCount}/> );

    return (
        <div className={s.posts}>
            <form>
                <p>My posts!</p>
                <input placeholder="your news..."/>
                <button>Send</button>
            </form>
            <div className={s.posted}>
                { posts }
            </div>
        </div>
    );
};

export default Posts;
