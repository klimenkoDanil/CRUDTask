import {createReducer} from 'redux-act';
import * as actions from '../actions';

const initialState = {
  starters: [],
};

const startersReducer = createReducer(
  {
    [actions.addStartersAction]: (state, payload) => ({
      starters: [...state.starters, payload],
    }),
    [actions.deleteStartersAction]: (state, id) => ({
      starters: state.starters.filter(item => item.id !== id),
    }),
    [actions.getStartersData]: (state, value) => ({
      starters: [...value],
    }),
  },
  initialState,
);

export default startersReducer;