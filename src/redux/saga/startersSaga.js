import {
  all,
  put,
  takeEvery,
} from 'redux-saga/effects';
import * as actions from '../actions'

function* deleteRec({ payload }) {
  try {
    yield put(actions.deleteStartersAction(payload))
  } catch (e) {
    console.log(e)
  }
};

function* addRec({ payload }) {
  try {
    yield put(actions.addStartersAction(payload))
  } catch (e) {
    console.log(e)
  }
};

function* getRec({ payload }) {
  try {
    yield put(actions.getStartersData(payload))
  } catch (e) {
    console.log(e)
  }
};

export default function* recipesSaga() {
  yield all([
    takeEvery(actions.callDeleteStartersAction, deleteRec),
    takeEvery(actions.callAddStartersAction, addRec),
    takeEvery(actions.callGetStartersData, getRec),
  ]);
}