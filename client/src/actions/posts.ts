import {
  getPosts,
  getProfile,
  getPost,
  createPost,
  deletePost,
  createComment,
  deleteComment,
  castVote,
} from '../util/api';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

const fetchPostsRequest = { type: FETCH_POSTS_REQUEST };
const fetchPostsSuccess = (posts: any) => ({
  type: FETCH_POSTS_SUCCESS,
  posts,
});
const fetchPostsError = (error: any) => ({
  type: FETCH_POSTS_ERROR,
  error,
});

export const fetchPosts =
  (category = '') =>
  async (dispatch: any) => {
    dispatch(fetchPostsRequest);
    try {
      const posts = await getPosts(category);
      dispatch(fetchPostsSuccess(posts));
    } catch (error) {
      dispatch(fetchPostsError(error));
    }
  };

export const fetchProfile = (username: any) => async (dispatch: any) => {
  dispatch(fetchPostsRequest);
  try {
    const posts = await getProfile(username);
    dispatch(fetchPostsSuccess(posts));
  } catch (error) {
    dispatch(fetchPostsError(error));
  }
};

export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';

const fetchPostRequest = { type: FETCH_POST_REQUEST };
const fetchPostSuccess = (post: any) => ({
  type: FETCH_POST_SUCCESS,
  post,
});
const fetchPostError = (error: any) => ({
  type: FETCH_POST_ERROR,
  error,
});

export const fetchPost = (id: any) => async (dispatch: any) => {
  dispatch(fetchPostRequest);
  try {
    const post = await getPost(id);
    dispatch(fetchPostSuccess(post));
  } catch (error) {
    dispatch(fetchPostError(error));
  }
};

export const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_ERROR = 'CREATE_POST_ERROR';

const createPostRequest = { type: CREATE_POST_REQUEST };
const createPostSuccess = (post: any) => ({
  type: CREATE_POST_SUCCESS,
  post,
});
const createPostError = (error: any) => ({
  type: CREATE_POST_ERROR,
  error,
});

export const attemptCreatePost =
  (post: any) => async (dispatch: any, getState: any) => {
    dispatch(createPostRequest);
    try {
      const { token } = getState().auth;
      const newPost = await createPost(post, token);
      dispatch(createPostSuccess(newPost));
    } catch (error) {
      dispatch(createPostError(error));
    }
  };

export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_ERROR = 'DELETE_POST_ERROR';

const deletePostRequest = { type: DELETE_POST_REQUEST };
const deletePostSuccess = (post: any) => ({
  type: DELETE_POST_SUCCESS,
  post,
});
const deletePostError = (error: any) => ({
  type: DELETE_POST_ERROR,
  error,
});

export const attemptDeletePost = () => async (dispatch: any, getState: any) => {
  dispatch(deletePostRequest);
  try {
    const { id } = getState().posts.post;
    const { token } = getState().auth;
    await deletePost(id, token);
    dispatch(deletePostSuccess(id));
  } catch (error) {
    dispatch(deletePostError(error));
  }
};

export const CREATE_COMMENT_REQUEST = 'CREATE_COMMENT_REQUEST';
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_ERROR = 'CREATE_COMMENT_ERROR';

const createCommentRequest = { type: CREATE_COMMENT_REQUEST };
const createCommentSuccess = (post: any) => ({
  type: CREATE_COMMENT_SUCCESS,
  post,
});
const createCommentError = (error: any) => ({
  type: CREATE_COMMENT_ERROR,
  error,
});

export const attemptCreateComment =
  (comment: any) => async (dispatch: any, getState: any) => {
    dispatch(createCommentRequest);
    try {
      const { id: post } = getState().posts.post;
      const { token } = getState().auth;
      const json = await createComment(post, comment, token);
      dispatch(createCommentSuccess(json));
    } catch (error) {
      dispatch(createCommentError(error));
    }
  };

export const DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
export const DELETE_COMMENT_ERROR = 'DELETE_COMMENT_ERROR';

const deleteCommentRequest = { type: DELETE_COMMENT_REQUEST };
const deleteCommentSuccess = (post: any) => ({
  type: DELETE_COMMENT_SUCCESS,
  post,
});
const deleteCommentError = (error: any) => ({
  type: DELETE_COMMENT_ERROR,
  error,
});

export const attemptDeleteComment =
  (comment: any) => async (dispatch: any, getState: any) => {
    dispatch(deleteCommentRequest);
    try {
      const { id: post } = getState().posts.post;
      const { token } = getState().auth;
      const json = await deleteComment(post, comment, token);
      dispatch(deleteCommentSuccess(json));
    } catch (error) {
      dispatch(deleteCommentError(error));
    }
  };

export const VOTE_REQUEST = 'VOTE_REQUEST';
export const VOTE_SUCCESS = 'VOTE_SUCCESS';
export const VOTE_ERROR = 'VOTE_ERROR';

const voteRequest = { type: VOTE_REQUEST };
const voteSuccess = (post: any) => ({
  type: VOTE_SUCCESS,
  post,
});
const voteError = (error: any) => ({
  type: VOTE_ERROR,
  error,
});

export const attemptVote =
  (id: any, vote: any) => async (dispatch: any, getState: any) => {
    dispatch(voteRequest);
    try {
      const { token } = getState().auth;
      const post = await castVote(id, vote, token);
      dispatch(voteSuccess(post));
    } catch (error) {
      dispatch(voteError(error));
    }
  };
