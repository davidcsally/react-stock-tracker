import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TextField, RaisedButton, DatePicker } from 'material-ui';
import './AddTrades.scss';

import { updateView, addTrade } from '../../actionCreators';

class AddTrades extends Component {
  constructor() {
    super()
    this.state = {
      ticker: '',
      shares: '',
      purPrice: '',
      date: '',
    }
  }

  openDatePicker = () => {
    this.refs.dp.openDialog()
  }

  addNewTrade = () => {
    const { ticker, shares, purPrice, date } = this.state;
    if (!ticker || !shares || !purPrice) {
      console.log('missing required data');
      return;
    };
    this.props.addTrade({ stock: { ticker, shares, purPrice, date } });
    this.props.updateView({ view: 'home' });
  }

  render() {
    const { date, shares, purPrice, ticker } = this.state;
    return (
      <div styleName="container">
        <div>
          <button
            onClick={() => this.props.updateView({ view: 'home' })}
          >X  Add Trades</button>
        </div>
        <TextField
          placeholder="Symbol or company name"
          name="ticker"
          onChange={(e, newTicker) =>
            this.setState({ ticker: newTicker })}
          value={ticker}
        />
        <TextField
          placeholder="# of shares"
          name="shares"
          type="number"
          onChange={(e, newShares) =>
            this.setState({ shares: newShares })}
          value={shares}
        />
        <TextField
          placeholder="Purchase Price"
          name="price"
          type="number"
          onChange={(e, newPrice) =>
            this.setState({ purPrice: newPrice })}
          value={purPrice}
        />
        <TextField
          placeholder="Purchase Date (Optional)"
          name="date"
          value={date ? date.toLocaleDateString('en-US') : ''}
          onClick={this.openDatePicker}
        />
        <RaisedButton
          label="CREATE"
          onClick={this.addNewTrade}
        />
        <DatePicker
          styleName="hidden"
          name="date"
          ref='dp'
          onChange={(e, newDate) =>
            this.setState({ date: newDate })}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { updateView, addTrade },
)(AddTrades);
