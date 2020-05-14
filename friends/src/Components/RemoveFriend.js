import React from 'react'

import { axiosWithAuth } from '../utils/axiosWithAuth'

class RemoveFriend extends React.Component {
    constructor(props) {
        super(props)
        this.state = props
    }

    sumbitHandler = e => {
        // console.log(this.state)

        axiosWithAuth()
            .delete(`/friends/${this.state.id}`)
            .then(response => {
                console.log(response)
            })
    }

    render() {
        console.log('RemoveFriend.js', this.state)
        return (
            <form onSubmit={this.sumbitHandler} >
                <button>Remove Friend</button>
            </form>
        )
    }
}

export default RemoveFriend;
