import { connect } from 'react-redux';
// @ts-expect-error TS(6142): Module './Component' was resolved to '/home/zadorn... Remove this comment to see the full error message
import App from './Component';

const mapStateToProps = (state: any) => ({
  dark: state.theme.dark,
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
