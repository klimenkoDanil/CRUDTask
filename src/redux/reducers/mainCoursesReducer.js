import {createReducer} from 'redux-act';
import * as actions from '../actions';

const initialState = {
  mainCourses: [],
};

const mainCoursesReducer = createReducer(
  {
    [actions.addMainCoursesAction]: (state, payload) => ({
      mainCourses: [...state.mainCourses, payload],
    }),
    [actions.deleteMainCoursesAction]: (state, id) => ({
      mainCourses: state.mainCourses.filter(item => item.id !== id),
    }),
    [actions.getMainCoursesData]: (state, value) => ({
      mainCourses: [...value],
    }),
  },
  initialState,
);

export default mainCoursesReducer;