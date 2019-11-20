import React, { Component } from "react";
import "./App.css";
import { UserCard } from "./components/UserCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: []
    };
  }
  componentDidMount() {
    fetch("https://api.github.com/users/kirawoods")
      .then(res => res.json())
      .then(user => this.setState({ userInfo: user }))
      .catch(error => console.log(error));
  }
  render() {
    console.log(this.state.userInfo);
    return <UserCard />;
  }
}

export default App;
