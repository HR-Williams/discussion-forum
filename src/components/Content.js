import React from "react";
import PropTypes from "prop-types";

function Content(props) {
  return (
    <React.Fragment>
      <h3>{props.title} - {props.user}</h3>
      <h4>{props.timestamp}</h4>
      <p>{props.body}</p>
     <p> up votes: {props.upvoteCount}</p>
     <p> down votes: {props.downvoteCount}</p>
    </React.Fragment>
  );
}


Content.propTypes = {
  title: PropTypes.string,
  user: PropTypes.string,
  body: PropTypes.string,
  downvoteCount: PropTypes.number,
  upvoteCount: PropTypes.number,
  timestamp: PropTypes.string 
};

export default Content;


