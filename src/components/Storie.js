import React from "react";

export default function Storie({ id, name }) {
  return (
    <div className="storie">
      <p className="id">{id}</p>
      <p className="name">{name}</p>
    </div>
  );
}
