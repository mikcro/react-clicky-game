import React from "react";
import "./CarCard.css";

const CarCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div>
      <img className="images img-container" alt={props.image.replace(".jpg", "")} src={require("../Content/images/" + props.image)} />
    </div>
  </div>
);

export default CarCard;
