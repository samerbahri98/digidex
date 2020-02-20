import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./Components/header";
import Search from "./Components/search";
import Matrix from "./Components/matrix";
import axios from "axios";

type listprops ={
  id : number
  name:string
  img:string
  level:string
}
// interface IntrinsicAttributes {
//   listelems:any
// }

class App extends Component {
  state = {
    list: [
      {
        id: 0,
        name: "",
        img: "",
        level: ""
      }
    ],
    allowedlist: [
      {
        id: 0,
        name: "",
        img: "",
        level: ""
      }
    ],
    keyword: ""
  };

  // state = {
  //   list: [],
  //   allowedlist: []
  // }

  componentDidMount() {
    this.getDigimons();
  }

  instring(small: string, big: string) {
    const limit = big.length - small.length;
    for (let i = 0; i < limit; i++) {
      if (big.slice(i, small.length).toUpperCase() === small.toUpperCase()) return true;
    }
    return false;
  }

  searchDigimons = (textv: string) => {
    let currentState:Array<listprops>=[];
    this.state.list.forEach(elem => {
      if (
        elem.name.length >= textv.length ||
        elem.level.length >= textv.length
      ) {
        if (
          this.instring(textv, elem.name) ||
          this.instring(textv, elem.level)
        ) {
          currentState.push(elem);
        }
      }
    });
    if (textv==="") currentState=this.state.list

    this.setState({ allowedlist: currentState });
  };

  searchbox = () => {};

  getDigimons = async () => {
    const res = await axios.get(
      "https://digimon-api.herokuapp.com/api/digimon"
    );
    const data = await res.data;

    this.setState({ list: data, allowedlist: data });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Search
          searchDigimons={this.searchDigimons}
          searchbox={this.searchbox}
          keyword={this.state.keyword}
        />
        <Matrix list={this.state.allowedlist} />
      </div>
    );
  }
}

export default App;
