import React from 'react';
import ContentList from './ContentList';

class ContentControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <ContentList />
      </React.Fragment>
    )
  }

}

export default ContentControl;