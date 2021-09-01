import React from "react";
import PropTypes from "prop-types";

function Content(props) {
  const {content} = props;


  function handleUpVoteCount () {
    const newupvoteCount = props.upvoteCount + 1;
    props.onVoting({title : props.title, user: props.user, body: props.body, downvoteCount : props.downvoteCount, upvoteCount : newupvoteCount, timestamp : props.timestamp, id: props.id})
  }

  function handleDownVoteCount () {
    const newdownvoteCount = props.downvoteCount + 1;
    props.onVoting({title : props.title, user: props.user, body: props.body, downvoteCount : newdownvoteCount, upvoteCount : props.upvoteCount, timestamp : props.timestamp, id: props.id})
  }


  return (
    <React.Fragment>
      <h3>{props.title} - {props.user}</h3>
      <h4>{props.timestamp}</h4>
      <p>{props.body}</p>
      <p> up votes: {props.upvoteCount}</p>
      <p> down votes: {props.downvoteCount}</p>

      <button onClick={handleUpVoteCount}>vote up</button> 
      <br></br>
      <button onClick={handleDownVoteCount}>vote down</button>
    </React.Fragment>
  );

}

Content.propTypes = {
  title: PropTypes.string,
  user: PropTypes.string,
  body: PropTypes.string,
  downvoteCount: PropTypes.number,
  upvoteCount: PropTypes.number,
  timestamp: PropTypes.string, 
  onVoting: PropTypes.func,
  content: PropTypes.object,
};

export default Content;


