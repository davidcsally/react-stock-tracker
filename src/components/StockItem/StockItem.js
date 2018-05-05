import React from 'react';
import PropTypes from 'prop-types';
import './StockItem.scss';

const StockItem = ({ ticker, price, volume, timestamp, valueChange = 0.15 }) => (
  <div styleName="container">
    <p styleName="ticker">{ticker}</p>
    <span styleName="price">{price}</span>
    <p styleName="value-change">{valueChange}%</p> 
  </div>
);

StockItem.propTypes = {
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  volume: PropTypes.number.isRequired,
  timestamp: PropTypes.string,
};

export default StockItem;
