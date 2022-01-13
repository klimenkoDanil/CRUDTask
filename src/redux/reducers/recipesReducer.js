import { createReducer } from 'redux-act';
import * as actions from '../actions';

const initialState = {
  recipes: [],
};

const recipesReducer = createReducer({
  [actions.addRecipeAction]: (state, payload) => ({
    recipes: [...state.recipes, payload],
  }),
}, initialState);

export default recipesReducer;