import React from "react";
import "../../Box.css";
import { hackerData } from "../hackerData";
import { Card, Button } from "react-bootstrap";

const HackCardTwo = () => {

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "25rem", height: "27rem", margin: "0rem" }} key={index} className="box">
        <Card.Link className="text-bg">{card.relatedStories[1].title}</Card.Link>
        <Card.Text className="rel-text">  {card.relatedStories[1].reactionsCount} reactions</Card.Text>
        <Card.Img  style={{ top: "3rem" }} variant="top" src={card.relatedStories[1].mainImage} />
        <Card.Body>
        <Card.Img  style={{ height: "50px", width: "65px" }} variant="top" src={card.relatedStories[1].profile.avatar} />
          <Card.Title className="displayname-mr-one"> {card.relatedStories[1].profile.handle}</Card.Title>
          <Card.Text className="displayname-mr">  {card.relatedStories[1].profile.displayName}</Card.Text>
          <Card.Text className="estimate-mr"> {card.relatedStories[1].estimatedTime} mins</Card.Text>
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
    bottom: "115px",
    zIndex: "1",
    boxShadow: "rgb(102 97 5) 0px 0.2em, rgb(102 97 5) 0px -0.2em, rgb(102 97 5) 0.2em 0px, rgb(102 97 5) -0.2em 0px" }}>{card.relatedStories[1].tags[0]}</Button>
        </Card.Body>
      </Card>
      
    );
  };
     
  return <div>{hackerData.map(renderCard)}</div>;
};

export default HackCardTwo;