import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class RemoveFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  submitHandler = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .delete(`/friends/${this.state.id}`)
      .then((response) => {
        console.log(this.state);
        this.state.getData();
      });
  };

  render() {
    // console.log("RemoveFriend.js", this.state.getData);
    return (
      <form onSubmit={this.submitHandler}>
        <button>Remove Friend</button>
      </form>
    );
  }
}

export default RemoveFriend;
