import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';
import './Home.css';
const Home = () => {
    const [posts,setPosts]=useState([]);
    useEffect(() => {
       const url=`https://jsonplaceholder.typicode.com/posts`;
       fetch(url)
       .then(res=>res.json())
       .then(data=>setPosts(data))
    }, [])
    return (
        <div>
            <h2> Total : {posts.length}</h2>
            <div className="postContainer">
                {
                    posts.map(post=><Posts post={post}></Posts>)
                }
            </div>
        </div>
    );
};

export default Home;