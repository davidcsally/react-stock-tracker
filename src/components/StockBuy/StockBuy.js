import React from 'react';
import PropTypes from 'prop-types';
import './StockBuy.scss';

const StockBuy = ({ ticker, purPrice, shares, date }) => (
  <div styleName="container">
    {ticker}  |  {purPrice}  |  {shares}  |  {date}
  </div>
);

StockBuy.propTypes = {
  ticker: PropTypes.string.isRequired,
  purPrice: PropTypes.number.isRequired,
  shares: PropTypes.number.isRequired,
  date: PropTypes.string,
};

export default StockBuy;
