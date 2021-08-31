import React from 'react';
import ContentList from './ContentList';
import NewContentForm from './NewContentForm'

class ContentControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainContentList: []
    };
  }

  handleShowingForm = () => {
    this.setState({
      formVisible: true
    })
  }

  handleAddNewContentToList = (newContent) => {
    const newMainContentList = this.state.mainContentList.concat(newContent);
    this.setState({
      mainContentList: newMainContentList,
      formVisible: false
    })
  }



  render() {
    let currentlyVisibleForm = null;

    if (this.state.formVisible) {
      currentlyVisibleForm = <NewContentForm onNewContentCreation={this.handleAddNewContentToList}/>
    } else {
      currentlyVisibleForm = null;
    }
    return (
      <React.Fragment>
        <div><ContentList contentList={this.state.mainContentList} formShow={this.handleShowingForm}/></div>
        <div>{currentlyVisibleForm}</div>
      </React.Fragment>
    )
  }

}

export default ContentControl;