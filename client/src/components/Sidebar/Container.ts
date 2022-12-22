import withAuth from '../../util/withAuth';
// @ts-expect-error TS(6142): Module './Component' was resolved to '/home/zadorn... Remove this comment to see the full error message
import Sidebar from './Component';

const SidebarContainer = withAuth(Sidebar);

export default SidebarContainer;
