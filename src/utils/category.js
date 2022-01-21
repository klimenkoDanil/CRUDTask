import { useSelector } from "react-redux";
import * as CONSTANTS from '../constants/keys'
import * as actions from '../redux/actions/index'

export const foodCategory = (category) => {

  const starters = useSelector(state => state.startersReducer.starters);
  const mainCourses = useSelector(state => state.mainCoursesReducer.mainCourses);
  const drinks = useSelector(state => state.drinksReducer.drinks);
  const snacks = useSelector(state => state.snacksReducer.snacks);
  const desserts = useSelector(state => state.dessertsReducer.desserts);

  switch (category) {
    case 'starters':
      return [...starters];
    case 'mainCourses':
      return [...mainCourses];
    case 'drinks':
      return [...drinks];
    case 'snacks':
      return [...snacks];
    case 'desserts':
      return [...desserts];
  }
}

export const foodKey = (category) => {

  switch (category) {
    case 'starters':
      return CONSTANTS.STARTERS_DATA_KEY;
    case 'mainCourses':
      return CONSTANTS.MAIN_COURSES_DATA_KEY;
    case 'drinks':
      return CONSTANTS.DRINKS_DATA_KEY;
    case 'snacks':
      return CONSTANTS.SNACKS_DATA_KEY;
    case 'desserts':
      return CONSTANTS.DESSERTS_DATA_KEY;
  }
}

export const foodDeleteActions = (category) => {

  switch (category) {
    case 'starters':
      return actions.callDeleteStartersAction;
    case 'mainCourses':
      return actions.callDeleteMainCoursesAction;
    case 'drinks':
      return actions.callDeleteDrinksAction;
    case 'snacks':
      return actions.callDeleteSnacksAction;
    case 'desserts':
      return actions.callDeleteDessertsAction;
  }
}

export const foodAddActions = (category) => {

  switch (category) {
    case 'starters':
      return actions.callAddStartersAction;
    case 'mainCourses':
      return actions.callAddMainCoursesAction;
    case 'drinks':
      return actions.callAddDrinksAction;
    case 'snacks':
      return actions.callAddSnacksAction;
    case 'desserts':
      return actions.callAddDessertsAction;
  }
}
