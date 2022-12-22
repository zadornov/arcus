import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error TS(6142): Module '../components/Post/Vote/Component' was res... Remove this comment to see the full error message
import PostVote from '../components/Post/Vote/Component';

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders without crashing', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  shallow(<PostVote />);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders the correct score', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<PostVote score={1} />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.find('span').text()).toEqual('1');
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders upvote and downvote buttons', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<PostVote />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.find('Upvote__PostVoteUpvote')).toHaveLength(1);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.find('Downvote__PostVoteDownvote')).toHaveLength(1);
});
