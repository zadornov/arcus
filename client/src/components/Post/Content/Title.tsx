import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
import { overflow, link } from '../../shared/helpers';

const Wrapper = styled.div`
  display: flex;

  * {
    ${overflow};

    display: block;
    font-size: 15px;
    line-height: 21px;
    font-weight: 500;
    text-decoration: none;
    color: ${(props: any) => props.theme.normalText};
    ${(props: any) => props.full && 'white-space: unset'};
  }

  a {
    ${link({ underline: true })};
  }
`;

const renderTitle = (props: any) => {
  switch (props.type) {
    case 'link':
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      return <a href={props.url}>{props.title}</a>;

    case 'text':
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      if (props.full) return <span>{props.title}</span>;
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      return <Link to={`/a/${props.category}/${props.id}`}>{props.title}</Link>;

    default:
      break;
  }
};

const PostContentTitle = (props: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Wrapper full={props.full}>{renderTitle(props)}</Wrapper>
);

export default PostContentTitle;
