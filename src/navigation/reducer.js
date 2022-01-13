import RootNavigator from './navigation';

// const initialState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams('Recipe'));
const initialState = null;

const navReducer = (state = initialState, action) => {
  const nextState = null;
  // const nextState = RootNavigator.router.getStateForAction(action, state);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default navReducer;