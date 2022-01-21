import { createAction } from 'redux-act';

export const addStartersAction = createAction('ADD_STARTERS_ACTION');
export const callAddStartersAction = createAction('CALL_ADD_STARTERS_ACTION');
export const deleteStartersAction = createAction('DELETE_STARTERS_ACTION');
export const callDeleteStartersAction = createAction('CALL_DELETE_STARTERS_ACTION')
export const getStartersData = createAction('GET_STARTERS_DATA');
export const callGetStartersData = createAction('CALL_GET_STARTERS_DATA');
export const setStartersData = createAction('SET_STARTERS_DATA');
export const callSetStartersData = createAction('CALL_SET_STARTERS_DATA');
