import { createAction } from 'redux-act';

export const addMainCoursesAction = createAction('ADD_MAINCOURSES_ACTION');
export const callAddMainCoursesAction = createAction('CALL_ADD_MAINCOURSES_ACTION');
export const deleteMainCoursesAction = createAction('DELETE_MAINCOURSES_ACTION');
export const callDeleteMainCoursesAction = createAction('CALL_DELETE_MAINCOURSES_ACTION')
export const getMainCoursesData = createAction('GET_MAINCOURSES_DATA');
export const callGetMainCoursesData = createAction('CALL_GET_MAINCOURSES_DATA');
export const setMainCoursesData = createAction('SET_MAINCOURSES_DATA');
export const callSetMainCoursesData = createAction('CALL_SET_MAINCOURSES_DATA');
