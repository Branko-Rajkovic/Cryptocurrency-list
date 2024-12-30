import React from "react";

export default function Info({ title, infoData }) {
  return (
    <div className="p-2 m-2 rounded-md bg-slate-500">
      <h3 className="text-sm font-semibold">{title}</h3>
      <span className="text-green-200">{infoData}</span>
    </div>
  );
}
