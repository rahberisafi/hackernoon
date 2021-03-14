import React from "react";
import "../../Box.css";
import { hackerData } from "../hackerData";
import { Card, Button } from "react-bootstrap";

const HackCardThree = () => {

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "25rem", height: "40rem", margin: "0rem" }} key={index} className="box">
        <Card.Link className="text-bg">{card.relatedStories[2].title}</Card.Link>
        <Card.Text className="rel-text">  {card.relatedStories[2].reactionsCount} reactions</Card.Text>
        <Card.Img  style={{ top: "3rem" }} variant="top" src={card.relatedStories[2].mainImage} />
        <Card.Body style={{ marginTop: "-1rem" }}>
        <Card.Img  style={{ height: "50px", width: "65px" }} variant="top" src={card.relatedStories[2].profile.avatar} />
          <Card.Title className="displayname-mr-one"> {card.relatedStories[2].profile.handle}</Card.Title>
          <Card.Text className="displayname-mr">  {card.relatedStories[2].profile.displayName}</Card.Text>
          <Card.Text style={{ marginTop: ".75rem", fontSize: "12px" }}> {card.relatedStories[2].profile.bio}</Card.Text>
          <Button style={{  
    fontFamily: "IBM Plex Mono",
    fontWeight: "bold",
    textDecoration: "none",
    display: "flex",
    webkitboxalign: "center",
    width: "auto",
    lineHeight: "1em",
    padding: "10px",
    fontSize: "1rem",
    background: "rgb(246, 247, 249)",
    color: "rgb(102, 97, 5)",
    position: "absolute",
    margin: "0px",
    right: "10px",
    bottom: "155px",
    zIndex: "1",
    boxShadow: "rgb(102 97 5) 0px 0.2em, rgb(102 97 5) 0px -0.2em, rgb(102 97 5) 0.2em 0px, rgb(102 97 5) -0.2em 0px" }}>{card.relatedStories[2].tags[2]}</Button>
        </Card.Body>
      </Card>
      
    );
  };
     
  return <div>{hackerData.map(renderCard)}</div>;
};

export default HackCardThree;