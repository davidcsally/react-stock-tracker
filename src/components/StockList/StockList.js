import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StockItem from '../StockItem/StockItem';
import './StockList.scss';

import { addStock, updateStockPrices, updateView } from '../../actionCreators';
import StockBuy from '../StockBuy/StockBuy';

class StockList extends Component {
  constructor(props) {
    super(props);
  }

  renderStockItems = (stocks) => {
    return stocks.map((s, i) => (
      <StockItem
        key={s.ticker + i}
        ticker={s.ticker}
        price={Number(s.price)}
        volume={Number(s.volume)}
        timestamp={s.timestamp}
      />
    ));
  }

  renderBuys = (buys) => {
    return buys.map((b, i) => (
      <StockBuy
        key={b.ticker + b.shares + i}
        ticker={b.ticker}
        shares={b.shares}
        purPrice={b.purPrice}
        date={b.date}
      />
    ))
  }

  renderPortfolio = (stocks) => {
    return stocks.map((s, i) => {
      const buys = this.renderBuys(s.buys);
      return (
        <div key={i}>
          <StockItem
            key={s.ticker + i}
            ticker={s.ticker}
            price={Number(s.price)}
            volume={Number(s.volume)}
            timestamp={s.timestamp}
          />
          {buys}
        </div>
      );
    });
  }

  render() {
    const { stocks, view } = this.props;
    console.log('view: ', view)
    const list = (view === 'home')
      ? this.renderStockItems(stocks)
      : this.renderPortfolio(stocks);
    return (
      <div styleName="container">
        David's Stock Tracker!
        {list}
        <div
          styleName="add-container"
          onClick={() => this.props.updateView({ view: 'add' })}
        >
          + Add Trades
        </div>
      </div>
    )
  }
}


export default connect(
  (state, ownProps) => ({ 
    view: ownProps.view,
    stocks: state.stocks 
  }),
  { updateStockPrices, addStock, updateView },
)(StockList);
