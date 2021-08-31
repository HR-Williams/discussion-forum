import { v4 } from 'uuid';
import React from "react"
import PropTypes from "prop-types";

function NewContentForm(props) {

  return (
    <React.Fragment>
      <h4>Post Content</h4>
      <form onSubmit={handleNewContentFormSubmission}>
        <input
          type='text'
          name='title'
          placeholder='Post Title' />
        <br />
        <input
          type='text'
          name='user'
          placeholder='User Name' />
        <br />
        <textarea
          name='body'
          placeholder='Post' />
        <br />
        <button type='submit'>Post it!</button>
      </form>
    </React.Fragment>
  );

  function handleNewContentFormSubmission(event) {
    event.preventDefault();
    const postDate = new Date();
    const stringDate = postDate.toString();
    props.onNewContentCreation({title: event.target.title.value, user: event.target.user.value, body: event.target.body.value, downvoteCount: 0, upvoteCount: 0, timestamp: stringDate, id: v4()})
  };
  
}

NewContentForm.propTypes = {
  onNewContentCreation: PropTypes.func
};

export default NewContentForm;