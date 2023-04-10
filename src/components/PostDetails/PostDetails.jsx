import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {

    const post = useLoaderData();
    // console.log(post);
    const { title, userId, id, body } = post;
    return (
        <div>
            <h3>{title}</h3>
            <h5>{id}</h5>
            <h4>{body}</h4>
        </div>
    );
};

export default PostDetails;