export function manageFriends(state, action) {
  const defaultState = { friends: [...state.friends] };
  switch (action.type) {
    case "ADD_FRIEND":
      defaultState.friends.push(action.friend);
      return defaultState;
      break;
    case "REMOVE_FRIEND":
      defaultState.friends = defaultState.friends.filter((friend) => {
        return friend.id !== action.id;
      });
      return defaultState;
      break;
    default:
      return state;
  }
}
