import React from "react";
import "../../Box.css";
import { hackerData } from "../hackerData";
import { Card, Button } from "react-bootstrap";

const HackCard = () => {

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "25rem", height: "18rem", margin: "0rem" }} key={index}>
        <Card.Link className="text-bg">{card.relatedStories[0].text}</Card.Link>
        <Card.Img  style={{ top: "3rem" }} variant="top" src={card.relatedStories[0].image} />
        <Card.Body>
          <Card.Title> Visit {card.relatedStories[0].companyName}</Card.Title>
          <Card.Link style={{ cursor: "pointer" }}>{card.relatedStories[0].link}</Card.Link> 
       <span>
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
    margin: "12px 10px 10px 0px",
    background: "rgb(245, 236, 67)",
    color: "rgb(102, 97, 5)",
    boxShadow: "rgb(102 97 5) 0px 0.2em, rgb(102 97 5) 0px -0.2em, rgb(102 97 5) 0.2em 0px, rgb(102 97 5) -0.2em 0px" }}>{card.relatedStories[0].category[1].label}</Button>
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
    margin: "-48px 10px 10px 140px",
    background: "rgb(245, 236, 70)",
    color: "rgb(102, 97, 5)",
    boxShadow: "rgb(102 97 5) 0px 0.2em, rgb(102 97 5) 0px -0.2em, rgb(102 97 5) 0.2em 0px, rgb(102 97 5) -0.2em 0px" }}>{card.relatedStories[0].category[0].label}</Button>
       </span>
      
        </Card.Body>
      </Card>
      
    );
  };
     
  return <div className="grid">{hackerData.map(renderCard)}</div>;
};

export default HackCard;