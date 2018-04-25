import { ADD_STOCK_SUCCESS } from '../actions';
import initialState from './initialState';

export default (state = initialState.tickers, { type, payload }) => {
  switch (type) {
    case ADD_STOCK_SUCCESS: {
      console.log('[tickers][ADD_STOCK_SUCCESS]', payload);
      const prev = state;
      const StockQuotes = payload['Stock Quotes'];
      const newTicker = StockQuotes[0]['1. symbol'];
      console.log('new ticker', newTicker);
      if (prev.includes(newTicker)) return;
      return [...prev, newTicker]
    }
    default:
      return state;
  }
}

