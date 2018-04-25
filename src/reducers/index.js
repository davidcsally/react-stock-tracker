import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import sagas from '../sagas/sagas';
import stocksReducer from './stocksReducer';
import uiReducer from './uiReducer';
import tickersReducer from './tickersReducer';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// this is the state of each component, all combined into one through CombineReducers
const allReducers = combineReducers({
  // reducers here
  stocks: stocksReducer,
  view: uiReducer,
  tickers: tickersReducer,
});

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

// run sagas
sagaMiddleware.run(sagas);

// todo remove
store.dispatch({ type: 'ADD_STOCK', payload: { stock: { ticker: 'BIO' } } });
store.dispatch({ type: 'ADD_STOCK', payload: { stock: { ticker: 'SQ' } } });
store.dispatch({ type: 'ADD_STOCK', payload: { stock: { ticker: 'MTCH' } } });

export default store;
