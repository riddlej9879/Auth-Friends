import React, { Component } from 'react'

import { axiosWithAuth } from '../utils/axiosWithAuth'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
        // this.setState({ id: Date.now() })
    }

    sumbitHandler = e => {
        console.log(this.state)
        axiosWithAuth()
            .post('/friends', this.state)
            .then(response => {
                console.log(response)
            })
    }

    render() {
        const { name, age, email } = this.state
        return (
            <div>
                <form className='add-form' onSubmit={this.sumbitHandler} >
                    <input
                        placeholder='Name'
                        type='text'
                        name='name'
                        value={name}
                        onChange={this.changeHandler} />
                    <input
                        placeholder='Age'
                        type='text'
                        name='age'
                        value={age}
                        onChange={this.changeHandler} />
                    <input
                        placeholder='Email'
                        type='text'
                        name='email'
                        value={email}
                        onChange={this.changeHandler} />
                    <button className='add-btn' >Add Friend</button>
                </form>
            </div>
        )
    }
}

export default PostForm;

// import React, { useState } from 'react'

// const AddFriend = () => {
//     const [name, setName] = useState('')
//     const [age, setAge] = useState('')
//     const [email, setEmail] = useState('')
//     const [friend, setFriend] = useState([])

//     const updateName = e => {
//         setName(e.target.value)
//     }

//     const updateAge = e => {
//         setAge(e.target.value)
//     }

//     const updateEmail = e => {
//         setEmail(e.target.value)
//     }

//     const handleSubmit = e => {
//         e.preventDefault()
//         if (name && age && email) {
//             setFriend(prevFriend => [...prevFriend, { name: name, age: age, email: email }])
//         }
//     }

//     return (
//         <div>
//             <h3>Add a friend</h3>
//             <form className='add-form' onSubmit={handleSubmit}>
//                 <input
//                     placeholder='Name'
//                     type='text'
//                     name='name'
//                     value={name}
//                     onChange={updateName}
//                 />
//                 <input
//                     placeholder='Age'
//                     type='text'
//                     name='age'
//                     value={age}
//                     onChange={updateAge}
//                 />
//                 <input
//                     placeholder='email'
//                     type='text'
//                     name='name'
//                     value={email}
//                     onChange={updateEmail}
//                 />
//                 <button>Add Friend</button>
//             </form>
//         </div>
//     )
// }

// export default AddFriend
