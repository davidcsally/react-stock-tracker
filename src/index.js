import 'babel-polyfill';
import React from 'react'; //needed?
import { render } from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import store from './reducers';

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
  ,
  document.getElementById('root'),
);
