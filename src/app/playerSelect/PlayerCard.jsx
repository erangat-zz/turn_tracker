import React, { Component } from "react";
import { TwitterPicker } from "react-color";

import "./PlayerCard.scss";

class PlayerCard extends Component {
  state = {
    displayPicker: false,
    color: this.props.color
  };

  handleClick = () => {
    this.setState({ displayPicker: !this.state.displayPicker });
  };

  handleClose = () => {
    this.setState({ displayPicker: false });
  };

  handleChange = color => {
    this.setState({ color: color.hex });
  };

  render() {
    return (
      <div className="PlayerCard">
        <div className="PlayerCard-info-container">
          {this.state.displayPicker ? (
            <div className="PlayerCard-popover">
              <div className="PlayerCard-cover" onClick={this.handleClose} />
              <TwitterPicker onChange={this.handleChange} triangle="hide" />
            </div>
          ) : null}
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
          style={{ backgroundColor: this.state.color }}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default PlayerCard;
