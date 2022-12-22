import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error TS(6142): Module '../components/Header/Component' was resolv... Remove this comment to see the full error message
import Header from '../components/Header/Component';
// @ts-expect-error TS(6142): Module '../components/Header/Logo' was resolved to... Remove this comment to see the full error message
import HeaderLogo from '../components/Header/Logo';
import HeaderDarkButtonContainer from '../components/Header/DarkButton/Container';
// @ts-expect-error TS(6142): Module '../components/Header/Username' was resolve... Remove this comment to see the full error message
import HeaderUsername from '../components/Header/Username';

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders without crashing', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  shallow(<Header />);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders a logo link', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<Header />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.contains(<HeaderLogo />)).toEqual(true);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders a dark mode toggle button', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<Header />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.contains(<HeaderDarkButtonContainer />)).toEqual(true);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders log in and sign up links when not logged in', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<Header />);
  const links = wrapper.find('NavLink__HeaderNavLink');

  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(links).toHaveLength(2);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(links.at(0).text()).toEqual('log in');
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(links.at(1).text()).toEqual('sign up');
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders a log out link when logged in', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<Header user />);
  const link = wrapper.find('NavLink__HeaderNavLink');
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(link.text()).toEqual('log out');
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it("renders the user's username when logged in", () => {
  const username = 'deniz';
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<Header user={{ username }} />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.contains(<HeaderUsername username={username} />)).toEqual(
    true
  );
});
