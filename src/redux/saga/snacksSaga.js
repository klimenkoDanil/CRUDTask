import {
  all,
  put,
  takeEvery,
} from 'redux-saga/effects';
import * as actions from '../actions'

function* deleteRec({ payload }) {
  try {
    yield put(actions.deleteSnacksAction(payload))
  } catch (e) {
    console.log(e)
  }
};

function* addRec({ payload }) {
  try {
    yield put(actions.addSnacksAction(payload))
  } catch (e) {
    console.log(e)
  }
};

function* getRec({ payload }) {
  try {
    yield put(actions.getSnacksData(payload))
  } catch (e) {
    console.log(e)
  }
};

export default function* recipesSaga() {
  yield all([
    takeEvery(actions.callDeleteSnacksAction, deleteRec),
    takeEvery(actions.callAddSnacksAction, addRec),
    takeEvery(actions.callGetSnacksData, getRec),
  ]);
}