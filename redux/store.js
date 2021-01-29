import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {reducers} from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware();
export default store = createStore(
  reducers,
  applyMiddleware(logger, sagaMiddleware),
);
sagaMiddleware.run(rootSaga);
