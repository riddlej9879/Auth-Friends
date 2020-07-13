import React, { Component } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class PostForm extends Component {
  constructor(props) {
    super(props);
    console.log("AddFriend.js props", props);

    this.state = {
      name: "",
      age: "",
      email: "",
      getData: props.getData,
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sumbitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axiosWithAuth()
      .post("/friends", this.state)
      .then((res) => {
        console.log(res);
      });
    this.setState({ name: "", age: "", email: "" });
  };

  render() {
    const { name, age, email } = this.state;
    // console.log("AddFriend.js this.state", this.state.getData);
    return (
      <div>
        <form className="add-form" onSubmit={this.sumbitHandler}>
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={name}
            onChange={this.changeHandler}
          />
          <input
            placeholder="Age"
            type="text"
            name="age"
            value={age}
            onChange={this.changeHandler}
          />
          <input
            placeholder="Email"
            type="text"
            name="email"
            value={email}
            onChange={this.changeHandler}
          />
          <button className="add-btn">Add Friend</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
