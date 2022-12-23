import { connect } from 'react-redux';
import App from './Component';

const mapStateToProps = (state: any) => ({
  dark: state.theme.dark,
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
