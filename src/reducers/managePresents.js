export function managePresents(state, action) {
  const defaultState = { numberOfPresents: 0 };

  switch (action.type) {
    case "INCREASE":
      return { numberOfPresents: (defaultState.numberOfPresents += 1) };
      break;
    default:
      return defaultState;
  }
}
