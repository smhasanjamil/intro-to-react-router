import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    // console.log(friend)
    const { id, name, phone, email } = friend;
    return (
        <div className='single-friend'>
            <h3>{name}</h3>
            <h3>{phone}</h3>
            <h3>{email}</h3>
            <p><Link to={`/friend/${id}`}>Show Me Details</Link></p>

        </div>
    );
};

export default Friend;