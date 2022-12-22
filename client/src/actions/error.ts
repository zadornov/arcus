export const SHOW_ERROR = 'SHOW_ERROR';
const showError = (error: any) => ({
  type: SHOW_ERROR,
  error,
});

export const HIDE_ERROR = 'HIDE_ERROR';
const hideError = () => ({ type: HIDE_ERROR });

let timeout: any;
export const showErrorWithTimeout = (error: any) => (dispatch: any) => {
  dispatch(showError(error));
  clearTimeout(timeout);
  timeout = setTimeout(() => dispatch(hideError()), 5000);
};

export const hideErrorClearTimeout = () => (dispatch: any) => {
  dispatch(hideError());
  clearTimeout(timeout);
};
