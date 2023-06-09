import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../components/Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();
    // console.log(friends)
    return (
        <div>
            <h1>Total friends: {friends.length}</h1>
            <div>
                {
                    friends.map(friend => <Friend friend={friend} key={friend.id}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;