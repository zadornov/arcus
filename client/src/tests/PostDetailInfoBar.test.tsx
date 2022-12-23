import React from 'react';
import { shallow } from 'enzyme';
import PostDetailInfoBar from '../components/PostDetail/InfoBar/Component';
import DeleteButton from '../components/shared/DeleteButton';

it('renders without crashing', () => {
  shallow(<PostDetailInfoBar />);
});

it('renders the information correctly', () => {
  const data = {
    views: 10,
    upvotePercentage: 50,
  };

  const wrapper = shallow(<PostDetailInfoBar {...data} />);
  const details = wrapper.find('span');

  expect(details.at(0).text()).toEqual(`${data.views} views`);
  expect(details.at(2).text()).toEqual(`${data.upvotePercentage}% upvoted`);
});

it('renders a delete button when author is logged in', () => {
  const data = {
    user: { id: 'abc123' },
    author: { id: 'abc123' },
  };

  // @ts-expect-error TS(2769) FIXME: No overload matches this call.
  const wrapper = shallow(<PostDetailInfoBar token {...data} />);

  expect(
    // @ts-expect-error TS(2339) FIXME: Property 'deletePost' does not exist on type 'Comp... Remove this comment to see the full error message
    wrapper.contains(<DeleteButton onClick={wrapper.instance().deletePost} />)
  ).toEqual(true);
});

it("doesn't render a delete post button if user is not author", () => {
  const data = {
    user: { id: 'abc123' },
    author: { id: 'def456' },
  };

  // @ts-expect-error TS(2769) FIXME: No overload matches this call.
  const wrapper = shallow(<PostDetailInfoBar token {...data} />);

  expect(
    wrapper.contains(
      // @ts-expect-error TS(2339) FIXME: Property 'deletePost' does not exist on type 'Comp... Remove this comment to see the full error message
      <DeleteButton deletePost={wrapper.instance().deletePost} />
    )
  ).toEqual(false);
});

it("doesn't render a delete post button if user is not logged in", () => {
  const wrapper = shallow(<PostDetailInfoBar />);
  expect(
    wrapper.contains(
      // @ts-expect-error TS(2339) FIXME: Property 'deletePost' does not exist on type 'Comp... Remove this comment to see the full error message
      <DeleteButton deletePost={wrapper.instance().deletePost} />
    )
  ).toEqual(false);
});
