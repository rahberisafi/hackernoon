import React, { Component } from "react";
import Navbarone  from "./components/Navbarone";
import "./App.css";
import HackerList from "./components/HackerList/HackerList";

class App extends Component {
  render(){
    return (
      <main>
          <Navbarone />
          <HackerList />
      </main>
    );
  }
}

export default App;