//@ts-nocheck

import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Route } from 'react-router-dom';
import HomeMainSection from './MainSection';
import CategoryMenuContainer from '../CategoryMenu/Container';
import PostListContainer from '../PostList/Container';
import PostDetailContainer from '../PostDetail/Container';
import SidebarContainer from '../Sidebar/Container';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 10vw;

  @media (max-width: 1024px) {
    margin: 0 5vw;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 0;
  }
`;

const Home = () => (
  <Wrapper>
    <HomeMainSection>
      <Route component={CategoryMenuContainer} />
      <Route exact path='/' component={PostListContainer} />
      <Route
        exact
        path='/a/:category'
        render={({ match }: any) => (
          <PostListContainer category={match.params.category} />
        )}
      />
      <Route
        exact
        path='/u/:username'
        render={({ match }: any) => (
          <PostListContainer username={match.params.username} />
        )}
      />
      <Route
        exact
        path='/a/:category/:post'
        render={({ match, history }: any) => (
          <PostDetailContainer id={match.params.post} history={history} />
        )}
      />
    </HomeMainSection>
    <Route component={SidebarContainer} />
  </Wrapper>
);

export default Home;
