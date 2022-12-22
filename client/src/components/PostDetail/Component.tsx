import React from 'react';
// @ts-expect-error TS(6142): Module '../shared/LoadingIndicator/Box' was resolv... Remove this comment to see the full error message
import LoadingIndicatorBox from '../shared/LoadingIndicator/Box';
// @ts-expect-error TS(6142): Module '../shared/Empty' was resolved to '/home/za... Remove this comment to see the full error message
import Empty from '../shared/Empty';
// @ts-expect-error TS(6142): Module './Post' was resolved to '/home/zadornov/Do... Remove this comment to see the full error message
import PostDetailPost from './Post';
import PostDetailInfoBarContainer from './InfoBar/Container';
import CommentFormContainer from '../CommentForm/Container';
// @ts-expect-error TS(6142): Module './CommentSection' was resolved to '/home/z... Remove this comment to see the full error message
import PostDetailCommentSection from './CommentSection';

class PostDetail extends React.Component {
  componentDidMount() {
    // @ts-expect-error TS(2339): Property 'fetchPost' does not exist on type 'Reado... Remove this comment to see the full error message
    this.props.fetchPost(this.props.id);
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    // @ts-expect-error TS(2339): Property 'post' does not exist on type 'Readonly<{... Remove this comment to see the full error message
    if (this.props.post !== prevProps.post && this.props.post === null) {
      // @ts-expect-error TS(2339): Property 'history' does not exist on type 'Readonl... Remove this comment to see the full error message
      this.props.history.goBack();
    }
  }

  render() {
    // @ts-expect-error TS(2339): Property 'post' does not exist on type 'Readonly<{... Remove this comment to see the full error message
    const { post } = this.props;
    // @ts-expect-error TS(2339): Property 'isFetching' does not exist on type 'Read... Remove this comment to see the full error message
    if (this.props.isFetching) return <LoadingIndicatorBox />;
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    if (!post) return <Empty />;
    return (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <PostDetailPost {...post} />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <PostDetailInfoBarContainer
          // @ts-expect-error TS(2322): Type '{ id: any; views: any; upvotePercentage: any... Remove this comment to see the full error message
          id={post.id}
          views={post.views}
          upvotePercentage={post.upvotePercentage}
          author={post.author}
        />
        // @ts-expect-error TS(2339): Property 'token' does not exist on type 'Readonly<... Remove this comment to see the full error message
        {this.props.token && <CommentFormContainer id={post.id} />}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <PostDetailCommentSection comments={post.comments} />
      </>
    );
  }
}

export default PostDetail;
