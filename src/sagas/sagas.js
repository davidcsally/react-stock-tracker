import { call, put, takeLatest, takeEvery, select } from 'redux-saga/effects';
import { requestPrices } from '../api/methods';
import {
  updateStockPrices, updateStocksSuccess,
  addStockSuccess,
} from '../actionCreators';
import { UPDATE_STOCKS, ADD_STOCK } from '../actions';

import { getStocks } from '../selectors';

function* getPrices() {
  const stocks = yield select(getStocks);
  console.log('stocks', stocks);
  const processed = stocks.map(stock => stock.ticker);
  try {
    const results = yield call(requestPrices, processed);
    console.log('results: ', results)
    if (results['Error Message']) throw new Error('bad');
    yield put(updateStocksSuccess(results));
  }
  catch (e) {
    console.log('[getPrices]: Error: ', e);
  }
}

function* getOneStock({ type, payload }) {
  const { stock } = payload;
  const { ticker } = stock;
  try {
    const results = yield call(requestPrices, ticker);
    console.log('results', results);
    yield put(addStockSuccess(results));
  }
  catch (e) {
    console.log('[getOneStock]: Error: ', e);
  }
}

export default function* allSagas() {
  yield takeEvery(ADD_STOCK, getOneStock);
  yield takeLatest(UPDATE_STOCKS, getPrices);
}
