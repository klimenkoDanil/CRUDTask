import { createAction } from 'redux-act';

export const addDrinksAction = createAction('ADD_DRINKS_ACTION');
export const callAddDrinksAction = createAction('CALL_ADD_DRINKS_ACTION');
export const deleteDrinksAction = createAction('DELETE_DRINKS_ACTION');
export const callDeleteDrinksAction = createAction('CALL_DELETE_DRINKS_ACTION')
export const getDrinksData = createAction('GET_DRINKS_DATA');
export const callGetDrinksData = createAction('CALL_GET_DRINKS_DATA');
export const setDrinksData = createAction('SET_DRINKS_DATA');
export const callSetDrinksData = createAction('CALL_SET_DRINKS_DATA');
