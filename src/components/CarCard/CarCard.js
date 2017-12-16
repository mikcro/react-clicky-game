import React from "react";
import "./CarCard.css";

const CarCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../content/images/" + props.image)} />
    </div>
  </div>
);

export default CarCard;
