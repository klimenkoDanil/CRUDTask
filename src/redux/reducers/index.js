import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import nav from '../../navigation/reducer';
import recipesReducer from './recipesReducer';

const reducer = combineReducers({
  form,
  nav,
  recipesReducer,
});

export default reducer;