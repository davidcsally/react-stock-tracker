import { createSelector } from 'reselect';

const stocksSelector = state => {
  console.log('state', state);
  return state.stocks;
}

export const getStocks = createSelector(
  stocksSelector,
  stocks => stocks.map(s => s.ticker),
);
