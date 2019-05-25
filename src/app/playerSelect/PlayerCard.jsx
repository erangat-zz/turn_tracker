import React, { Component } from "react";
import "./PlayerCard.scss";

class PlayerCard extends Component {
  render() {
    return (
      <div className="PlayerCard">
        <div className="PlayerCard-info-container">
          <div className="PlayerCard-picture">
            <p> Pic </p>
          </div>
          <div className="PlayerCard-name">
            <p> {this.props.name} </p>
          </div>
          <div className="PlayerCard-remove">
            <p> Remove </p>
          </div>
        </div>
        <div
          className="PlayerCard-color"
          style={{ backgroundColor: this.props.color }}
        />
      </div>
    );
  }
}

export default PlayerCard;
