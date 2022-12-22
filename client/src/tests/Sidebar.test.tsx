import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error TS(6142): Module '../components/Sidebar/Component' was resol... Remove this comment to see the full error message
import Sidebar from '../components/Sidebar/Component';
// @ts-expect-error TS(6142): Module '../components/Sidebar/CategoryList' was re... Remove this comment to see the full error message
import SidebarCategoryList from '../components/Sidebar/CategoryList';
// @ts-expect-error TS(6142): Module '../components/Sidebar/CreatePostButton' wa... Remove this comment to see the full error message
import SidebarCreatePostButton from '../components/Sidebar/CreatePostButton';

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders without crashing', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  shallow(<Sidebar />);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders a list of categories', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<Sidebar />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.contains(<SidebarCategoryList />)).toEqual(true);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders a create post button if user is logged in', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<Sidebar token />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.contains(<SidebarCreatePostButton />)).toEqual(true);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it("doesn't render a create post button if user is not logged in", () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<Sidebar />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.contains(<SidebarCreatePostButton />)).toEqual(false);
});
