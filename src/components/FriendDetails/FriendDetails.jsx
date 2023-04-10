import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    const { name, username, phone, website, email, address } = friend;
    // console.log(friend)
    return (
        <div>
            <h3>{name}</h3>
            <h5>{username}</h5>
            <h5>{phone}</h5>
            <h5>{email}</h5>
            <h5>{website}</h5>

        </div>
    );
};

export default FriendDetails;
