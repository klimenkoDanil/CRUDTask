import { createAction } from 'redux-act';

export const addSnacksAction = createAction('ADD_SNACKS_ACTION');
export const callAddSnacksAction = createAction('CALL_ADD_SNACKS_ACTION');
export const deleteSnacksAction = createAction('DELETE_SNACKS_ACTION');
export const callDeleteSnacksAction = createAction('CALL_DELETE_SNACKS_ACTION')
export const getSnacksData = createAction('GET_SNACKS_DATA');
export const callGetSnacksData = createAction('CALL_GET_SNACKS_DATA');
export const setSnacksData = createAction('SET_SNACKS_DATA');
export const callSetSnacksData = createAction('CALL_SET_SNACKS_DATA');
