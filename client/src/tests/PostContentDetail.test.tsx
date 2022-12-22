import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import { shallow, mount } from 'enzyme';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { MemoryRouter } from 'react-router-dom';
import moment from 'moment';
// @ts-expect-error TS(6142): Module '../components/Post/Content/Detail' was res... Remove this comment to see the full error message
import PostContentDetail from '../components/Post/Content/Detail';

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders without crashing', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  shallow(<PostContentDetail />);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders the information correctly', () => {
  const data = {
    author: { username: 'author' },
    category: 'category',
    created: '2018-11-05T05:02:38.544Z',
    commentCount: 0,
  };

  const wrapper = mount(
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <MemoryRouter>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <PostContentDetail {...data} />
    </MemoryRouter>
  );
  const links = wrapper.find('a');
  const timestamp = wrapper.find('span').at(1);

  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(links.at(0).text()).toEqual('0 comments');
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(links.at(1).text()).toEqual(`/a/${data.category}`);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(links.at(2).text()).toEqual(data.author.username);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(timestamp.text()).toEqual(moment(data.created).fromNow());
});
