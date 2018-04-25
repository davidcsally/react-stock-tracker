import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'material-ui';

import StockList from '../../components/StockList/StockList';
import './HomePage.scss';

class HomePage extends Component {
  constructor() {
    super();
    this.state = { view: 'home' }
  }

  renderView = () => {
    const { view } = this.state;
    if (view === 'portfolio') {
      return (
        <StockList view="portfolio" />
      );
    }
    return <StockList view="home" />;
  }

  render() {
    return (
      <div styleName="container">
        <p>today's date</p>
        <h2>value change</h2>
        <div>
          <button>Today</button>
          <button onClick={() => this.setState({ view: 'portfolio' })}>Portfolio</button>
          {this.renderView()}
        </div>
      </div>
    );
  }
}

export default HomePage;
