import React from "react";

export default function Info({ title, infoData }) {
  return (
    <div>
      <h3>{title}</h3>
      <span>{infoData}</span>
    </div>
  );
}
