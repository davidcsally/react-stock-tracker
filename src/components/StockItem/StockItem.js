import React from 'react';
import PropTypes from 'prop-types';
import './StockItem.scss';

const StockItem = ({ ticker, price, volume, timestamp }) => (
  <div styleName="container">
    {ticker}  |  {price}
  </div>
);

StockItem.propTypes = {
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  volume: PropTypes.number.isRequired,
  timestamp: PropTypes.string,
};

export default StockItem;
