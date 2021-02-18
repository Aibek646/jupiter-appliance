import React from "react";
import "../Components/styles/Main.css";
import Post from "./Post";

const Main = () => {
  return (
    <div className="main">
      <div className="first__col">
        <h1>JUPITER REPAIRS</h1>
        <p>
          We are dedicated people, who works for the pleasure, not for the
          money. We want to give our customers the best experience. Our company
          is operated throughout Bay area. If you call Us, you will never be
          dissapointed! We fix all commercial and residential appliances! Please
          select one.
        </p>
        <div className="buttons">
          <button style={{ marginRight: "50px" }}>Residential</button>
          <button>Commercial</button>
        </div>
      </div>
      <div className="second__col">
        <h1>Our Customers Review</h1>
        <p>Here's what some of our customers are saying.</p>
        <div className="cards">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
      <div className="third__col">
        <h1>Companies we repair</h1>
        <img src="/all-appliances-logos.jpg" alt="" />
      </div>
    </div>
  );
};

export default Main;
