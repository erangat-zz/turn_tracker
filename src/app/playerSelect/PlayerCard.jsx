import React, { Component } from "react";
import { TwitterPicker } from "react-color";

import "./PlayerCard.scss";

class PlayerCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayPicker: false,
      color: this.props.color,
      name: this.props.name
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick = () => {
    this.setState({ displayPicker: !this.state.displayPicker });
  };

  handleClose = () => {
    this.setState({ displayPicker: false });
  };

  handleChange = color => {
    this.setState({ color: color.hex, displayPicker: false });
  };

  handleNameChange(event) {
    this.props.onNameChange(this.props.id, event.target.value);
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    this.refs.inputRef.blur();
    event.preventDefault();
  }

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
            <form onSubmit={this.handleSubmit}>
              <input
                placeholder={"Player" + this.props.id}
                ref="inputRef"
                type="text"
                value={this.props.name}
                onChange={this.handleNameChange}
              />
            </form>
          </div>
          <div className="PlayerCard-remove">
            <p onClick={() => this.props.onRemove(this.props.id)}> Remove </p>
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
