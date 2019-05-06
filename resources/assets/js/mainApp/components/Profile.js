import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import axios from "axios";
import ComposeSection from "./ComposeSection";
import Posts from "./Posts";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }

  async componentWillMount() {
    this.setState(
      {
        initialData: this.props.initialData
      },
      () => {
        console.log(self.state);
      }
    );
  }

  render() {
    return <div className="content-area">This is the users profile</div>;
  }
}
