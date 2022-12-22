import { connect } from 'react-redux';
// @ts-expect-error TS(6142): Module './Component' was resolved to '/home/zadorn... Remove this comment to see the full error message
import ErrorNotification from './Component';

const mapStateToProps = (state: any) => ({
  error: state.error,
});

const ErrorNotificationContainer = connect(mapStateToProps)(ErrorNotification);

export default ErrorNotificationContainer;
