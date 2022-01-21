import {
  all,
  put,
  takeEvery,
} from 'redux-saga/effects';
import * as actions from '../actions'

function* deleteRec({ payload }) {
  try {
    yield put(actions.deleteMainCoursesAction(payload))
  } catch (e) {
    console.log(e)
  }
};

function* addRec({ payload }) {
  try {
    yield put(actions.addMainCoursesAction(payload))
  } catch (e) {
    console.log(e)
  }
};

function* getRec({ payload }) {
  try {
    yield put(actions.getMainCoursesData(payload))
  } catch (e) {
    console.log(e)
  }
};

export default function* recipesSaga() {
  yield all([
    takeEvery(actions.callDeleteMainCoursesAction, deleteRec),
    takeEvery(actions.callAddMainCoursesAction, addRec),
    takeEvery(actions.callGetMainCoursesData, getRec),
  ]);
}