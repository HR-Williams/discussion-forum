export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTENT':
      const newMainContentList = state.concat(action.content);
      return newMainContentList;

      case 'EDIT_CONTENT': 
      const votedMainList = state
    .filter(content => content.id !== action.content.id)
    .concat(action.content);
    return votedMainList
    default:
      return state;
  }
};   