import React from "react";

export default function About() {
  return (
    <div className="article">
      <header>
        <div className="flex items-center">
          <h2 className="w-1/2 m-4 text-4xl text-center text-orange-300">
            Welcome to CryptoBay
          </h2>
          <img src="/images/about_title.png" className="w-1/2" />
        </div>

        <p>Your gateway to understanding cryptocurrency trading!</p>
      </header>

      <div>
        <img src="/images/horizontal_rule.png" className="h-10" />
        <h4>About Us</h4>
        <img src="/images/horizontal_rule.png" className="h-10" />
        <p>
          CryptoDemo is a platform designed to simplify the world of
          cryptocurrency for beginners and enthusiasts. Our goal is to provide
          accurate cryptocurrency listings, market updates, and
          beginner-friendly guides to help you understand and start trading
          digital assets.
        </p>
        <img src="/images/horizontal_rule.png" className="h-10" />

        <h4>Our Mission</h4>
        <p>
          We aim to demystify cryptocurrency trading by offering comprehensive
          resources, real-time data, and expert insights. Whether you're new to
          the crypto space or a seasoned trader, our platform is here to support
          your journey.
        </p>
        <img src="/images/horizontal_rule.png" className="h-10" />

        <h4>What Makes Us Unique?</h4>
        <ul>
          <li>Beginner-friendly guides and tutorials.</li>

          <li>A dedicated team passionate about blockchain technology.</li>
        </ul>
        <img src="/images/horizontal_rule.png" className="h-10" />

        <h4>Ready to Start Your Journey?</h4>
      </div>
    </div>
  );
}
