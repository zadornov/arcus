import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
// @ts-expect-error TS(6142): Module './Title' was resolved to '/home/zadornov/D... Remove this comment to see the full error message
import PostContentTitle from './Title';
import PostContentPreview from './Preview';
// @ts-expect-error TS(6142): Module './FullText' was resolved to '/home/zadorno... Remove this comment to see the full error message
import PostContentFullText from './FullText';
// @ts-expect-error TS(6142): Module './Detail' was resolved to '/home/zadornov/... Remove this comment to see the full error message
import PostContentDetail from './Detail';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-left: 1px solid ${(props: any) => props.theme.border};
  padding: 8px;
  min-width: 0;
`;

const renderContent = (props: any) => {
  switch (props.type) {
    case 'link':
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      return <PostContentPreview>{props.url}</PostContentPreview>;

    case 'text':
      if (props.showFullPost) {
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <PostContentFullText>{props.text}</PostContentFullText>;
      }
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      return <PostContentPreview>{props.text}</PostContentPreview>;

    default:
      break;
  }
};

const PostContent = ({
  url,
  title,
  type,
  text,
  commentCount,
  showFullPost,
  ...details
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Wrapper>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <PostContentTitle
      url={url}
      title={title}
      type={type}
      full={showFullPost}
      {...details}
    />
    {renderContent({ type, url, text, showFullPost })}
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <PostContentDetail commentCount={commentCount} {...details} />
  </Wrapper>
);

export default PostContent;
