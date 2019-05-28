import React, { useState, useEffect, useRef } from "react";
import { TwitterPicker } from "react-color";

import "./PlayerCard.scss";

function PlayerCard(props) {
  const [displayPicker, setDisplayPicker] = useState(false);
  const [color, setColor] = useState(props.color);
  const [name, setName] = useState(props.name);
  const nameRef = useRef(null);
  const id = props.id;

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
      props.onChange({
        name: name,
        color: newColor,
        id: id
      });
    },
    [name, color]
  );

  return (
    <div className="PlayerCard">
      <div className="PlayerCard-info-container">
        {displayPicker ? (
          <div className="PlayerCard-popover">
            <div className="PlayerCard-cover" onClick={handleClose} />
            <TwitterPicker onChange={handleChange} triangle="hide" />
          </div>
        ) : null}
        <div className="PlayerCard-picture">
          <p> Pic </p>
        </div>
        <div className="PlayerCard-name">
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
        <div className="PlayerCard-remove">
          <p onClick={() => props.onRemove(props.id)}> Remove </p>
        </div>
      </div>
      <div
        className="PlayerCard-color"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      />
    </div>
  );
}

export default PlayerCard;
