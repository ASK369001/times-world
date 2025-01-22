import React from "react";
import "./carditem.css";

export default function Carditem({ country }) {
  console.log({ country });
  const { flag, name, region } = country;
  return (
    <div className="country-card">
      <img className="country-flag" src={flag} alt={name}></img>
      <div>
        <h5>{name}</h5>
        <small>{region}</small>
      </div>
    </div>
  );
}
