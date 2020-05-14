import React from 'react'
import { FriendsCard } from './FriendsCard'

import { axiosWithAuth } from '../utils/axiosWithAuth'

import './Friends.styles.css'
import AddFriend from './AddFriend'

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
                this.setState({ friends: res.data })
                // console.log('axiosWithAuth: ', res)
            })
            .catch(err => console.log('Error is: ', err))
    };

    render() {
        return (
            <div className='friends-box'>
                <section className='top'>
                    <h1 className='friends-header'>Friends</h1>
                    <AddFriend />
                </section>
                <section className='friends-list'>
                    {
                        this.state.friends.map(friend =>
                            <FriendsCard key={this.state.friends.id} friend={friend} />
                        )
                    }
                </section>
            </div>
        )
    }
}

export default Friends;


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