import { all } from 'redux-saga/effects';
import startersSaga from './startersSaga';
import mainCoursesSaga from './mainCoursesSaga';
import drinksSaga from './drinksSaga';
import snacksSaga from './snacksSaga';
import dessertsSaga from './dessertsSaga';


export default function* rootSaga() {
  yield all([
    startersSaga(),
    mainCoursesSaga(),
    drinksSaga(),
    snacksSaga(),
    dessertsSaga(),
  ]);
};
