import React, { useState, useEffect, useRef } from "react";
import { TwitterPicker } from "react-color";

import "./PlayerCard.scss";

function PlayerCard(props) {
  const [displayPicker, setDisplayPicker] = useState(false);
  const [color, setColor] = useState(props.color);
  const [name, setName] = useState(props.name);
  const nameRef = useRef(null);
  const { id, onChange } = props;

  const handleClick = () => {
    setDisplayPicker(!displayPicker);
  };

  const handleClose = () => {
    setDisplayPicker(false);
  };

  const handleChange = newColor => {
    setColor(newColor.hex);
    setDisplayPicker(false);
    props.onChange({ name: name, color: newColor, id: id });
  };

  const handleSubmit = event => {
    nameRef.current.blur();
    event.preventDefault();
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  useEffect(
    () => {
      let newColor = color;
      onChange({ name: name, color: newColor, id: id });
    },
    [name, color]
  );

  return (
    <div className="playerCard">
      <div className="playerCard-info-container">
        {displayPicker ? (
          <div className="playerCard-popover">
            <div className="playerCard-cover" onClick={handleClose} />
            <TwitterPicker onChange={handleChange} triangle="hide" />
          </div>
        ) : null}
        <div className="playerCard-picture">
          <img
            className="round-img"
            src={"http://lorempixel.com/200/200/abstract/" + props.id}
            alt=""
          />
        </div>
        <div className="playerCard-name">
          <form onSubmit={handleSubmit}>
            <input
              placeholder={"Player" + props.id}
              ref={nameRef}
              type="text"
              value={props.name}
              onChange={handleNameChange}
            />
          </form>
        </div>
        <div className="playerCard-remove">
          <i
            className="fa fa-trash-o"
            onClick={() => props.onRemove(props.id)}
          />
        </div>
      </div>
      <div
        className="playerCard-color"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      />
    </div>
  );
}

export default PlayerCard;
