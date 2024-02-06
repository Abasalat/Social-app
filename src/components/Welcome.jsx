import React from "react";

const Welcome = ({ onGetPostsClick }) => {
  return (
    <center className="welcome-message">
      <marquee scrollamount="10">
        <h1>There is no post available yet</h1>
      </marquee>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostsClick}
      >
        Get Post From Server
      </button>
    </center>
  );
};

export default Welcome;
