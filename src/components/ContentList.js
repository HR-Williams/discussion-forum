import React from "react";
import PropTypes from "prop-types";
import Content from "./Content";

function ContentList(props) {
  return (
    <React.Fragment>
    {props.contentList.map((content) =>
     <Content 
      title={content.title}
      user={content.user}
      body={content.body}
      timestamp={content.timestamp}
      upvoteCount={content.upvoteCount}
      downvoteCount={content.downvoteCount}
      id={content.id}
      key={content.id} />
    )}
   
    
    <button onClick={props.formShow}>add something!</button>
    </React.Fragment>
  );
}

ContentList.propTypes = {
  contentList: PropTypes.array,
  formShow: PropTypes.func
}


export default ContentList;