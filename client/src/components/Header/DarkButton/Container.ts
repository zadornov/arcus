import { connect } from 'react-redux';
import { toggleDarkTheme } from '../../../actions/theme';
// @ts-expect-error TS(6142): Module './Component' was resolved to '/home/zadorn... Remove this comment to see the full error message
import HeaderDarkButton from './Component';

const mapDispatchToProps = { toggleDarkTheme };

const HeaderDarkButtonContainer = connect(
  null,
  mapDispatchToProps
)(HeaderDarkButton);

export default HeaderDarkButtonContainer;
