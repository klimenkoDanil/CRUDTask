import {createReducer} from 'redux-act';
import * as actions from '../actions';

const initialState = {
  snacks: [],
};

const snacksReducer = createReducer(
  {
    [actions.addSnacksAction]: (state, payload) => ({
      snacks: [...state.snacks, payload],
    }),
    [actions.deleteSnacksAction]: (state, id) => ({
      snacks: state.snacks.filter(item => item.id !== id),
    }),
    [actions.getSnacksData]: (state, value) => ({
      snacks: [...value],
    }),
  },
  initialState,
);

export default snacksReducer;