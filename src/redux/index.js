import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reducer from './reducers';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'starter',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['recipeData'],
};

const persistedReducer = persistReducer(persistConfig, reducer);
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(persistedReducer, enhancer);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export {persistor};
export default store;
