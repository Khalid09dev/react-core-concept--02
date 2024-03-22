import { useEffect, useState } from 'react';
import './Friends.css'
import Friend from './Friend';


const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])

    return (
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;


/**
 * 1. declare a state to hold data
 * 2. use effect with dependency array
 * 3. use fetch to load data
 * 4. set loaded data to the fetch
 * 5. display data on the UIx
 */