import { createAction } from 'redux-act';

export const addDessertsAction = createAction('ADD_DESSERTS_ACTION');
export const callAddDessertsAction = createAction('CALL_ADD_DESSERTS_ACTION');
export const deleteDessertsAction = createAction('DELETE_DESSERTS_ACTION');
export const callDeleteDessertsAction = createAction('CALL_DELETE_DESSERTS_ACTION')
export const getDessertsData = createAction('GET_DESSERTS_DATA');
export const callGetDessertsData = createAction('CALL_GET_DESSERTS_DATA');
export const setDessertsData = createAction('SET_DESSERTS_DATA');
export const callSetDessertsData = createAction('CALL_SET_DESSERTS_DATA');
