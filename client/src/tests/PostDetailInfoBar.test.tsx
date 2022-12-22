import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error TS(6142): Module '../components/PostDetail/InfoBar/Component... Remove this comment to see the full error message
import PostDetailInfoBar from '../components/PostDetail/InfoBar/Component';
// @ts-expect-error TS(6142): Module '../components/shared/DeleteButton' was res... Remove this comment to see the full error message
import DeleteButton from '../components/shared/DeleteButton';

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders without crashing', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  shallow(<PostDetailInfoBar />);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders the information correctly', () => {
  const data = {
    views: 10,
    upvotePercentage: 50,
  };

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<PostDetailInfoBar {...data} />);
  const details = wrapper.find('span');

  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(details.at(0).text()).toEqual(`${data.views} views`);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(details.at(2).text()).toEqual(`${data.upvotePercentage}% upvoted`);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders a delete button when author is logged in', () => {
  const data = {
    user: { id: 'abc123' },
    author: { id: 'abc123' },
  };

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<PostDetailInfoBar token {...data} />);

  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    wrapper.contains(<DeleteButton onClick={wrapper.instance().deletePost} />)
  ).toEqual(true);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it("doesn't render a delete post button if user is not author", () => {
  const data = {
    user: { id: 'abc123' },
    author: { id: 'def456' },
  };

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<PostDetailInfoBar token {...data} />);

  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(
    wrapper.contains(
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DeleteButton deletePost={wrapper.instance().deletePost} />
    )
  ).toEqual(false);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it("doesn't render a delete post button if user is not logged in", () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<PostDetailInfoBar />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(
    wrapper.contains(
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DeleteButton deletePost={wrapper.instance().deletePost} />
    )
  ).toEqual(false);
});
