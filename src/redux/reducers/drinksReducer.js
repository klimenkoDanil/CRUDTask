import {createReducer} from 'redux-act';
import * as actions from '../actions';

const initialState = {
  drinks: [],
};

const drinksReducer = createReducer(
  {
    [actions.addDrinksAction]: (state, payload) => ({
      drinks: [...state.drinks, payload],
    }),
    [actions.deleteDrinksAction]: (state, id) => ({
      drinks: [...state.drinks.filter(item => item.id !== id)],
    }),
    [actions.getDrinksData]: (state, value) => ({
      drinks: [...value],
    }),
  },
  initialState,
);

export default drinksReducer;