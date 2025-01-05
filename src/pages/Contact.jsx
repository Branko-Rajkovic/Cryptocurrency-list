import React from "react";

export default function Contact() {
  return (
    <div className="page-bg">
      <img src="/images/horizontal_rule.png" className="h-10" />
      <header className="card-small-box">
        <h2 className="w-1/3 title-orange text-end">Get in Touch</h2>
        <img src="/images/contact.png" className="w-2/3" />
      </header>

      <img src="/images/horizontal_rule.png" className="h-10" />

      <div className="card-small-box">
        <div className="w-1/2">
          <img src="/images/envelope.png" />
        </div>
        <div>
          <p>
            <span className="sky-text-strong">Email: </span>{" "}
            home.branko@gmail.com
          </p>
          <p>
            <span className="sky-text-strong">Phone: </span>
            +381 2522 788
          </p>
          <p>
            <span className="sky-text-strong">Address: </span>
            Stevana Hristica 31, Novi Sad, Serbia
          </p>
        </div>
      </div>
    </div>
  );
}
