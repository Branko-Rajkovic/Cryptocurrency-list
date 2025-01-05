import React from "react";

export default function Contact() {
  return (
    <div className="items-center min-h-screen text-slate-300">
      <img src="/horizontal_rule.png" className="h-10" />
      <header className="flex items-center m-8">
        <h2 className="w-1/3 text-4xl font-bold text-orange-300 text-end">
          Get in Touch
        </h2>
        <img src="/contact.png" className="w-2/3" />
      </header>

      <img src="/horizontal_rule.png" className="h-10" />

      <div className="flex items-center mt-8">
        <div className="w-1/2">
          <img src="/envelope.png" />
        </div>
        <div>
          <p>
            <span className="font-semibold text-sky-300">Email: </span>{" "}
            home.branko@gmail.com
          </p>
          <p>
            <span className="font-semibold text-sky-300">Phone: </span>
            +381 2522 788
          </p>
          <p>
            <span className="font-semibold text-sky-300">Address: </span>
            Stevana Hristica 31, Novi Sad, Serbia
          </p>
        </div>
      </div>
    </div>
  );
}
