import React from "react";

export default function Storie({ id, name, link }) {
  return (
    <a className="storie" href={link} target="_blank" rel="noopener noreferrer">
      <p className="id">{id}</p>
      <p className="name">{name}</p>
    </a>
  );
}
