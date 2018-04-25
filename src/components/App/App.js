import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from '../../reducers';
import { updateView } from '../../actionCreators';

import StockList from '../StockList/StockList';
import HomePage from '../../views/HomePage/HomePage';
import AddTrades from '../../views/AddTrades/AddTrades';
import './App.scss';

class App extends Component {
  renderView = () => {
    const { view } = this.props;
    if (view === 'add') return <AddTrades />
    return <HomePage />
  }

  render() {
    return (
      <div>
        {this.renderView()}
        {/* <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/add" component={AddTrades} />
        </Switch>
      </BrowserRouter> */}
      </div>
    );
  }
}

export default connect(
  state => ({ view: state.view }),
  { updateView },
)(App);
