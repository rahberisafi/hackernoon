import React, { Component } from "react";
import Hack from "../Hack/Hack";
import { hackerData } from "../hackerData";

export default class HackerList extends Component {
state = {
  hacker: hackerData
};

  render() {
    const { hacker } = this.state;
console.log(hackerData);
    return (
        <>
      <section className="grid">
        {hacker.map(hack => {
          return <Hack key={hack.id} hack={hack}  />
        })}

      </section>
    
      </>
    );
  }
}