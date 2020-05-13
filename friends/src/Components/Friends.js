import React, { useState, useEffect } from 'react'
import { FriendsCard } from './FriendsCard'

import { axiosWithAuth } from '../utils/axiosWithAuth'

// const Friends = () => {
//     const [friends, setFriends] = useState([])

//     useEffect(
//         axiosWithAuth()
//             .get('/friends')
//             .then(res => console.log(res))
//             .catch(err => console.log('Error is: ', err)
//             ), [])

//     console.log('Friends.js: ', friends)

//     return (
//         <div className='friends-box'>
//             <h1>Friends</h1>
//             <FriendsCard />
//         </div>
//     )
// }

// export default Friends;

class Friends extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                this.state = res.data
                console.log(this.state)
            })
            .catch(err => console.log('Error is: ', err))
    };

    render() {
        console.log('Friends.js: ', this.friends)
        return (
            <div className='friends-box'>
                <h1 className='friends-header'>Friends</h1>
                {this.friends === null ? (
                    <h1>Loading Friends</h1>
                ) : (
                        <div className='friends'>
                            {
                                this.friends.map(friend =>
                                    <FriendsCard key={this.friends.id} friend={friend} />
                                )
                            }
                        </div>
                    )}

                {/* <FriendsCard friends={this.friends} /> */}
            </div>
        )
    }
}

export default Friends;
