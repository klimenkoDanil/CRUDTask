import {
  all,
  put,
  takeEvery,
} from 'redux-saga/effects';
import * as actions from '../actions'

function* deleteRec({ payload }) {
  try {
    yield put(actions.deleteDrinksAction(payload))
  } catch (e) {
    console.log(e)
  }
};

function* addRec({ payload }) {
  try {
    yield put(actions.addDrinksAction(payload))
  } catch (e) {
    console.log(e)
  }
};

function* getRec({ payload }) {
  try {
    yield put(actions.getDrinksData(payload))
  } catch (e) {
    console.log(e)
  }
};

export default function* recipesSaga() {
  yield all([
    takeEvery(actions.callDeleteDrinksAction, deleteRec),
    takeEvery(actions.callAddDrinksAction, addRec),
    takeEvery(actions.callGetDrinksData, getRec),
  ]);
}