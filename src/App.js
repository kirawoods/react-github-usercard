import React, { Component } from "react";
import "./App.css";
// import { UserCard } from "./components/UserCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: [],
      userFollowers: []
    };
  }
  componentDidMount() {
    fetch("https://api.github.com/users/kirawoods")
      .then(res => res.json())
      .then(user => this.setState({ userInfo: user }));
    fetch("https://api.github.com/users/kirawoods/followers")
      .then(res => res.json())

      .then(followers => this.setState({ userFollowers: followers }));
    // .catch(error => console.log(error));
  }

  render() {
    console.log(this.state.userInfo);
    console.log(this.state.userFollowers[0]);
    if (this.state.userFollowers.length === 0) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container">
          <div className="cards">
            <div className="card">
              <img
                src={this.state.userInfo.avatar_url}
                alt="user-headshot"
              ></img>
              <div className="card-info">
                <h3 className="name">{this.state.userInfo.name}</h3>
                <p className="username">{this.state.userInfo.login}</p>
                <p>Location: {this.state.userInfo.location}</p>
                <p>
                  Profile:{" "}
                  <a href={this.state.userInfo.html_url}>
                    {this.state.userInfo.html_url}
                  </a>
                </p>
                <p>Bio: {this.state.userInfo.bio}</p>
                <p>
                  Followers:{" "}
                  {this.state.userFollowers.map(
                    follower => follower.login + ""
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
