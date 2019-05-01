import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class ComposeSection extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }
  clickedBtn = () => {
    console.log("swag");
  };
  render() {
    return (
      <section className="compose-section">
        <textarea name="name" rows={8} cols={80} defaultValue={""} />
        <div className="user-img" />
        <div className="buttons">
          <div className=" button photo-btn">
            <i className="fas fa-camera" />
          </div>
          <div className=" button video-btn">
            <i className="fas fa-video" />
          </div>
          <div className="button send-btn">
            <i className="fas fa-paper-plane" />
          </div>
        </div>
      </section>
    );
  }
}
