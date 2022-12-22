// @ts-expect-error TS(7016): Could not find a declaration file for module 'hist... Remove this comment to see the full error message
import { createBrowserHistory } from 'history';
import store from '../store';
import { hideErrorClearTimeout } from '../actions/error';

const history = createBrowserHistory();

history.listen(() => {
  // @ts-expect-error TS(2345): Argument of type '(dispatch: any) => void' is not ... Remove this comment to see the full error message
  if (store.getState().error) store.dispatch(hideErrorClearTimeout());
});

export default history;
