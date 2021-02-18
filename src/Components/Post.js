import React from "react";
import "./styles/Post.css";
import { Avatar } from "@material-ui/core";

const Post = () => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>Markus Spens</h2>
          <p>@gfiangfsdmail.ru</p>
        </div>
      </div>
      <div className="post__body">
        <p>
          I really jupiter repairance services, guys work very hard, and makes
          comfortable with their job!
        </p>
      </div>
    </div>
  );
};

export default Post;
