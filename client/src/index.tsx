import './style.css';
import './config/moment';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppContainer from './components/App/Container';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Provider store={store}>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
