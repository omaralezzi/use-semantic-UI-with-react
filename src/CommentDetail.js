import React from "react";
import faker from "faker";

// just to test the value for the faker.js site/API
const sss = faker.time.recent();
console.log(sss);

export const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Sam
        </a>
        <div className="metadata">
          <span className="date">today at 6:00PM</span>
        </div>
        <div className="text">Nice blog post</div>
      </div>
    </div>
  );
};

export default CommentDetail;
