import React from 'react';
import styled from 'styled-components/macro';
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
      return <a href={props.url}>{props.title}</a>;

    case 'text':
      if (props.full) return <span>{props.title}</span>;
      return <Link to={`/a/${props.category}/${props.id}`}>{props.title}</Link>;

    default:
      break;
  }
};

const PostContentTitle = (props: any) => (
  // @ts-expect-error TS(2769) FIXME: No overload matches this call.
  <Wrapper full={props.full}>{renderTitle(props)}</Wrapper>
);

export default PostContentTitle;
