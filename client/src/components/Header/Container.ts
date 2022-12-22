import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuth from '../../util/withAuth';
import { logout } from '../../actions/auth';
// @ts-expect-error TS(6142): Module './Component' was resolved to '/home/zadorn... Remove this comment to see the full error message
import Header from './Component';

const mapDispatchToProps = { logout };

const enhance = compose(withAuth, connect(null, mapDispatchToProps));

const HeaderContainer = enhance(Header);

export default HeaderContainer;
