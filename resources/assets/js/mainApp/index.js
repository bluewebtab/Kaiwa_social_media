import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import LeftMenu from "./components/LeftMenu";
import Messenger from "./components/Messenger";
import SearchHeader from "./components/SearchHeader";
import ComposeSection from "./components/ComposeSection";
import Posts from "./components/Posts";
import LoadingComp from "./components/LoadingComp";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }

  async componentWillMount() {
    const self = this;
    const getInitialData = async function() {
      try {
        const initialData = await axios.get("/api/initialApp");
        console.log(initialData);
        self.setState(
          {
            initialData: initialData.data
          },
          () => {
            console.log(self.state);
          }
        );
      } catch (error) {
        console.log(error);
      }
    };
    getInitialData();
  }

  clickedBtn = () => {
    console.log("swag");
  };
  render() {
    return (
      <div className="app-container home-page">
        <LoadingComp
          initialData={
            this.state.initialData == undefined
              ? "loading"
              : this.state.initialData
          }
        />
        <LeftMenu
          initialData={
            this.state.initialData == undefined
              ? "loading"
              : this.state.initialData
          }
        />
        <section id="content-container">
          <SearchHeader />
          <div className="content-area">
            <ComposeSection />
            <Posts />
          </div>
        </section>
        <Messenger />
      </div>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);
