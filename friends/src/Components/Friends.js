import React from "react";
import { FriendsCard } from "./FriendsCard";

import { axiosWithAuth } from "../utils/axiosWithAuth";

import "./Friends.styles.css";
import AddFriend from "./AddFriend";

class Friends extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        this.setState({ friends: res.data });
        // console.log('axiosWithAuth: ', res)
      })
      .catch((err) => console.log("Error is: ", err));
  };

  render() {
    return (
      <div className="friends-box">
        <section className="top">
          <h1 className="friends-header">Friends</h1>
          <AddFriend getData={this.getData} />
        </section>
        <section className="friends-list">
          {this.state.friends.map((friend) => (
            <FriendsCard
              key={friend.id}
              friend={friend}
              getData={this.getData}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Friends;
