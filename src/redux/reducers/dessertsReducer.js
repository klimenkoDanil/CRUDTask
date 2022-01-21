import {createReducer} from 'redux-act';
import * as actions from '../actions';

const initialState = {
  desserts: [],
};

const dessertsReducer = createReducer(
  {
    [actions.addDessertsAction]: (state, payload) => ({
      desserts: [...state.desserts, payload],
    }),
    [actions.deleteDessertsAction]: (state, id) => ({
      desserts: state.desserts.filter(item => item.id !== id),
    }),
    [actions.getDessertsData]: (state, value) => ({
      desserts: [...value],
    }),
  },
  initialState,
);

export default dessertsReducer;
