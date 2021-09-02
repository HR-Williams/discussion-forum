import React from 'react';
import ContentList from './ContentList';
import NewContentForm from './NewContentForm'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ContentControl extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      // formVisible: false,
      // mainContentList: []
    };
  }

  handleShowingForm = () => {
    const { dispatch } = this.props;
    const action = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action);
    
    // this.setState({
    //   formVisible: true
    // })
  }

  handleAddNewContentToList = (newContent) => {
    const action = {
      type: 'ADD_CONTENT',
      content: newContent
    }
    const { dispatch } = this.props;
    dispatch(action)
    // const newMainContentList = this.state.mainContentList.concat(newContent);
    // this.setState({
    //   mainContentList: newMainContentList
    // })
   
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleVoting = (post) => {
    // const votedMainList = this.props.mainContentList
    // .filter(content => content.id !== post.id)
    // .concat(post);
    // this.setState({
    //   mainContentList: votedMainList
    // });
    const action = {
      type: 'EDIT_CONTENT',
      content: post
    }
    const { dispatch } = this.props;
    dispatch(action)

  }

  render() {
    let currentlyVisibleForm = null;
    const {formVisible} = this.props;
    // console.log(props.formVisible)

    if (formVisible) {
      currentlyVisibleForm = <NewContentForm onNewContentCreation={this.handleAddNewContentToList}/>
    } else {
      currentlyVisibleForm = null;
    }

    return (
      
      <React.Fragment>
        <div><ContentList contentList={this.props.mainContentList} formShow={this.handleShowingForm} onVoting = {this.handleVoting} /></div>
        <div>{currentlyVisibleForm}</div>
      </React.Fragment>
    )
  }

}

ContentControl.propTypes = {
  mainContentList: PropTypes.array,
  formVisible: PropTypes.bool
}

const mapStateToProps = state => {

  state.mainContentList.sort(({upvoteCount: a}, {upvoteCount: b}) =>b-a);
  
  return {
    mainContentList: state.mainContentList,
    formVisible: state.formVisible
  }
}

ContentControl = connect(mapStateToProps)(ContentControl);

export default ContentControl;