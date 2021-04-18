import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import {reducers} from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

import Reactotron from '../ReactotronConfig';
const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({sagaMonitor});
export default store = createStore(
  reducers,
  compose(applyMiddleware(logger, sagaMiddleware), Reactotron.createEnhancer()),
);
sagaMiddleware.run(rootSaga);
