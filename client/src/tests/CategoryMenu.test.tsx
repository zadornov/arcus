import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error TS(6142): Module '../components/CategoryMenu/Component' was ... Remove this comment to see the full error message
import CategoryMenu from '../components/CategoryMenu/Component';
// @ts-expect-error TS(6142): Module '../components/CategoryMenu/CreatePostButto... Remove this comment to see the full error message
import CategoryMenuCreatePostButton from '../components/CategoryMenu/CreatePostButton';

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders without crashing', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  shallow(<CategoryMenu />);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders a create post button if user is logged in', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<CategoryMenu token />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.contains(<CategoryMenuCreatePostButton />)).toEqual(true);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it("doesn't render a create post button if user is not logged in", () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<CategoryMenu />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.contains(<CategoryMenuCreatePostButton />)).toEqual(false);
});
