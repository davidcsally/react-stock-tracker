import KEY from './key';

const RequestType = {
  BATCH_STOCK_QUOTES: 'BATCH_STOCK_QUOTES'
}
const { BATCH_STOCK_QUOTES } = RequestType;
const AlphaVantageUrl = `https://www.alphavantage.co/query?function=${BATCH_STOCK_QUOTES}`;

export const fetchPrices = symbols => `${AlphaVantageUrl}&symbols=${symbols.toString()}&apikey=${KEY}`;
