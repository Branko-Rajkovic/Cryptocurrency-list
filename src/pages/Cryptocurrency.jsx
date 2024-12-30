import React from "react";
import Article from "../components/Article";
import Header from "../components/Header";

export default function Cryptocurrency() {
  return (
    <div className="m-4">
      <Header>
        <img src="/image_header.png" />
      </Header>

      <Article />
    </div>
  );
}
