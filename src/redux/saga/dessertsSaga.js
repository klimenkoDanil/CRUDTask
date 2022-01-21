import {
  all,
  put,
  takeEvery,
} from 'redux-saga/effects';
import * as actions from '../actions'

function* deleteRec({ payload }) {
  try {
    yield put(actions.deleteDessertsAction(payload))
  } catch (e) {
    console.log(e)
  }
};

function* addRec({ payload }) {
  try {
    yield put(actions.addDessertsAction(payload))
  } catch (e) {
    console.log(e)
  }
};

function* getRec({ payload }) {
  try {
    yield put(actions.getDessertsData(payload))
  } catch (e) {
    console.log(e)
  }
};

export default function* recipesSaga() {
  yield all([
    takeEvery(actions.callDeleteDessertsAction, deleteRec),
    takeEvery(actions.callAddDessertsAction, addRec),
    takeEvery(actions.callGetDessertsData, getRec),
  ]);
}