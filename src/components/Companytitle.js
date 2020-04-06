import React from "react";

export default function CompanyTitle(props) {
  return (
    <div className="text-title">
      <h1>
        {props.name} <strong>{props.title}</strong>
      </h1>
    </div>
  );
}
