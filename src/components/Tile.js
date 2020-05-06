import React from "react";

export default function Tile(props) {
  return (
    <div className="text-title">
      <h1>
        {props.name} <strong>{props.title}</strong>
      </h1>
    </div>
  );
}
