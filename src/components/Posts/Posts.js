import React from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Posts.css';
const Posts = (props) => {
    const {id,title,body}=props.post;
    const history=useHistory();
    const showDetails=()=>{
        history.push(`/post/${id}`)
    }
    return (
        <div className="post">
            <div className="postDetails">
                <h2> <Link to={`/post/${id}`}> userId : {id}</Link></h2>
                <h5> title :{title}</h5>
                <p> {body}</p>
            </div>
            <button onClick={showDetails}>Show Details</button>
        </div>
    );
};

export default Posts;