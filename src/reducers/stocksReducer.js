import {
  ADD_STOCK_SUCCESS,
  REMOVE_STOCK,
  UPDATE_STOCKS_SUCCESS,
  ADD_TRADE,
} from '../actions';
import initialState from './initialState';

export default (state = initialState.stocks, { type, payload }) => {
  switch (type) {
    case ADD_STOCK_SUCCESS: {
      console.log('[ADD_STOCK_SUCCESS] ', payload);
      const tickers = state.map(s => s.ticker); 
      const prev = state
      const StockQuotes = payload['Stock Quotes'];
      const newStock = {
        ticker: StockQuotes[0]['1. symbol'],
        price: StockQuotes[0]['2. price'],
        volume: StockQuotes[0]['3. volume'],
        timestamp: StockQuotes[0]['4. timestamp'],
        buys: [],
      }
      if (tickers.includes(newStock.ticker)) return [...prev];
      return [...prev, newStock];
    }

    case UPDATE_STOCKS_SUCCESS: {
      console.log('[UPDATE_STOCKS_SUCCESS]: ', payload);
      const StockQuotes = payload['Stock Quotes'];
      const newValues = StockQuotes.map(s => {
        return { ticker: s['1. symbol'], price: s['2. price'], volume: s['3. volume'], timestamp: s['4. timestamp'] }
      })
      return newValues;
    }

    case ADD_TRADE:
      console.log('[ADD_TRADE]: ', payload);
      const prev = state;
      const tickers = state.map(s => s.ticker);
      if (tickers.includes(payload.stock.ticker)) {
        const index = tickers.indexOf(payload.stock.ticker);
        prev[index].buys.push({
          ticker: payload.stock.ticker,
          shares: Number(payload.stock.shares),
          purPrice: Number(payload.stock.purPrice),
          date: payload.stock.date || '',
        });
        return prev;
      }
      return prev;

    default: {
      return state;
    }
  }
};
