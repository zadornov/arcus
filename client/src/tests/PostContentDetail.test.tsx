import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import { shallow, mount } from 'enzyme';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { MemoryRouter } from 'react-router-dom';
import moment from 'moment';
import PostContentDetail from '../components/Post/Content/Detail';

it('renders without crashing', () => {
  shallow(<PostContentDetail />);
});

it('renders the information correctly', () => {
  const data = {
    author: { username: 'author' },
    category: 'category',
    created: '2018-11-05T05:02:38.544Z',
    commentCount: 0,
  };

  const wrapper = mount(
    <MemoryRouter>
      <PostContentDetail {...data} />
    </MemoryRouter>
  );
  const links = wrapper.find('a');
  const timestamp = wrapper.find('span').at(1);

  expect(links.at(0).text()).toEqual('0 comments');
  expect(links.at(1).text()).toEqual(`/a/${data.category}`);
  expect(links.at(2).text()).toEqual(data.author.username);
  expect(timestamp.text()).toEqual(moment(data.created).fromNow());
});
