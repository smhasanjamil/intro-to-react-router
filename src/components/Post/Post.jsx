import React from 'react';
import './Post.css';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    // console.log(post)
    const { title, body, userId, id } = post;

    // For button Handler
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>

            <h4 className='post-title'>{title}</h4>
            {/* <h6 className='post-username'>User: {userId}</h6>
            <h5 className='post-body'>{body}</h5> */}
            <p>{id}</p>
            <p>
                <Link to={`/post/${id}`}>View Details</Link>
            </p>
            <button onClick={handleNavigation}>Show Details</button>

        </div>
    );
};

export default Post;

