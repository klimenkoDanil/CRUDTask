import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import startersReducer from './startersReducer';
import mainCoursesReducer from './mainCoursesReducer';
import drinksReducer from './drinksReducer';
import snacksReducer from './snacksReducer';
import dessertsReducer from './dessertsReducer';

const reducer = combineReducers({
  form,
  startersReducer,
  mainCoursesReducer,
  drinksReducer,
  snacksReducer,
  dessertsReducer
});

export default reducer;