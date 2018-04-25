
import { fetchPrices } from './urls';

export const requestPrices = async (symbols) => {
  try {
    console.log(fetchPrices(symbols));
    const response = await fetch(fetchPrices(symbols));
    const data = await response.json();
    return data;
  }
  catch (e) {
    return console.log('[fetchArticles] Error: ', e);z
  }
};
