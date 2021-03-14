import React, { Component } from "react";
import HackCard from "./HackCard";
import HackCardTwo from "./HackCardTwo";
import HackCardThree from "./HackCardThree";

export default class Hack extends Component {

  render() {
    const { mainImage, title, editor, excerpt, profile, tags } = this.props.hack;

    return (
      <>
      <article className="grid grid-pad">

      <h3>{title}</h3> 
 
          <img src={mainImage} alt="" className="img-main" />
          
          <p>Article By: {editor.displayName}</p>
          <p>{excerpt}</p>

          <div className="profile">
            <img src={profile.avatar} alt="" className="profile-img" />
            <p>{profile.handle}</p>
            <p>{profile.displayName}</p>
            <p>{profile.bio}</p>
            <a href="https://github.com/codebucks27"> {" "} <i className="fab fa-github fa-2x fs"></i></a>
            <a href="https://twitter.com/code_bucks"> {" "} <i className="fab fa-twitter fa-2x fs"></i></a>
            {/* <p>
             {reactions.total} {" "}
            {reactions.storyReactions.boat} {" "}
            {reactions.storyReactions.heart}{" "}
            {reactions.storyReactions.light} {" "}
            {reactions.storyReactions.money}
            </p>
        */}
          </div><br />
          <div className="sub">
            <div className="subprof">
            <img src={profile.avatar} alt="" className="subimg" />
            <p className="subp">{profile.handle}</p>
            <p className="subps">{profile.displayName}</p>

            </div>
          
            <p className="ad">{profile.adText}</p>

          </div>
          <br />
          <h3 className="rel-text">Related Post</h3>
          <hr />
  
 
      </article>
  
  
  <HackCard /> <br />
    <HackCardTwo /> <br />
    <HackCardThree />

    <h3 className="rel-text">Tags</h3>
          <hr />

          
            <div className="tags">  
           
              <a href="b" className="hrf">{tags[0]}</a>
              <a href="b" className="hrf">{tags[1]}</a>
              <a href="b" className="hrf">{tags[2]}</a>
              <a href="b" className="hrf">{tags[3]}</a>
              <a href="b" className="hrf">{tags[4]}</a>
              <a href="b" className="hrf">{tags[5]}</a>
              <a href="b" className="hrf">{tags[6]}</a>
              <a href="b" className="hrf">{tags[7]}</a>
              <a href="b" className="hrf">{tags[8]}</a>
             
               </div>
      
  
 
      <div className="p-4">

      </div>
      </>
    );
  }
}
