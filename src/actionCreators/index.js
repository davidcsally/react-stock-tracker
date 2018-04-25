import {
  UPDATE_STOCKS, UPDATE_STOCKS_SUCCESS,
  ADD_STOCK, UPDATE_VIEW,
  ADD_STOCK_SUCCESS,
  ADD_TRADE, ADD_TRADE_SUCCESS,
} from '../actions';

export const addStock = payload =>
  ({ type: ADD_STOCK, payload });
export const addStockSuccess = payload =>
  ({ type: ADD_STOCK_SUCCESS, payload });

export const updateStockPrices = () =>
  ({ type: UPDATE_STOCKS });
export const updateStocksSuccess = payload =>
  ({ type: UPDATE_STOCKS_SUCCESS, payload });

export const addTrade = payload =>
  ({ type: ADD_TRADE, payload });
export const addTradeSuccess = payload =>
  ({ type: ADD_TRADE_SUCCESS, payload });

export const updateView = payload =>
  ({ type: UPDATE_VIEW, payload });

