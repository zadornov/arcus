import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import { shallow } from 'enzyme';
import PostVote from '../components/Post/Vote/Component';

it('renders without crashing', () => {
  shallow(<PostVote />);
});

it('renders the correct score', () => {
  // @ts-expect-error TS(2322): Type '{ score: number; }' is not assignable to type 
  const wrapper = shallow(<PostVote score={1} />);
  expect(wrapper.find('span').text()).toEqual('1');
});

it('renders upvote and downvote buttons', () => {
  const wrapper = shallow(<PostVote />);
  expect(wrapper.find('Upvote__PostVoteUpvote')).toHaveLength(1);
  expect(wrapper.find('Downvote__PostVoteDownvote')).toHaveLength(1);
});
