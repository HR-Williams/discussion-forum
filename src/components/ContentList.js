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
          key={content.id}
          onVoting={props.onVoting}

        />
      )}

<br/>
      <button onClick={props.formShow}>Add a new post!</button>
    </React.Fragment>

  );
}

ContentList.propTypes = {
  contentList: PropTypes.array,
  formShow: PropTypes.func,
  onVoting: PropTypes.func
}


export default ContentList;