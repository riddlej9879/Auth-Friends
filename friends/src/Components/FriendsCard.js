import React from 'react'
import RemoveFriend from './RemoveFriend'

import './FriendsCard.styles.css'

export const FriendsCard = (props) => {
    // console.log('FriendsCard.js props: ', props)
    return (
        <div className='friends-card'>
            <h4>Name: {props.friend.name}</h4>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
            <RemoveFriend id={props.friend.id} />
        </div>
    )
}