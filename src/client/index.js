// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise';

// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// FILES
import App from './components/App';
import reducers from './reducers';

const store = applyMiddleware(reduxThunk)(createStore); //Redux Store
// const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

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
