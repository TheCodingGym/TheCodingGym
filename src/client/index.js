// This is the entry point for our app
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/App';
import reducers from './reducers';

const store = applyMiddleware(promise)(createStore); //Redux Store

ReactDOM.render(
  <MuiThemeProvider>
    {/* "Provider": react component that knows how to read changes from the redux store anytime the redux store gets some new state and then will update all its children with the changed state */}
    <Provider store={store(reducers)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
