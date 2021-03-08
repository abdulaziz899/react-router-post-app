import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Comments from '../Comments/Comments';
import './PostDetails.css';

const PostDetails = () => {
    const {id}=useParams();
    const [post,setPost]=useState({});
    const [comments,setComments]=useState({});
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>
            {setPost(data)
            console.log(data)})
    },[])
    useEffect (()=>{
        const Url=`https://jsonplaceholder.typicode.com/comments/${id}`;
        fetch(Url)
        .then(res=>res.json())
        .then(data=>setComments(data))
    },[])
    const {title,body}=post;
    const {name,email}=comments;
    return (
        <div className="showPost">
            <div className="showPostDetails">
                <h2>  userId:{id}</h2>
                <h5> title :{title}</h5>
                <p> {body}</p>
                <h5>this is comment </h5>
                <p>name :{name}</p>
                <p> email : {email}</p>
                <p> body : {body}</p>
            </div>
            <Link to="/home"><button >Back Home</button></Link>
        </div>
    );
};

export default PostDetails;