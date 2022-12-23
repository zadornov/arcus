import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import {
  titleValidator,
  urlValidator,
  textPostValidator,
  typeValidator,
} from '../../util/validators';
import { attemptCreatePost } from '../../actions/posts';
import categories from '../../categories';
import withAuth from '../../util/withAuth';
import CreatePostForm from './Component';

const validate = (fields: any) => {
  const errors = {};
  const title = fields.title ? fields.title : '';
  const url = fields.url ? fields.url : '';
  const type = fields.type ? fields.type : '';
  const text = fields.text ? fields.text : '';

  // @ts-expect-error TS(2339) FIXME: Property 'title' does not exist on type '{}'.
  errors.title = titleValidator(title);
  // @ts-expect-error TS(2339) FIXME: Property 'url' does not exist on type '{}'.
  if (type === 'link') errors.url = urlValidator(url);
  // @ts-expect-error TS(2339) FIXME: Property 'text' does not exist on type '{}'.
  if (type === 'text') errors.text = textPostValidator(text);
  // @ts-expect-error TS(2339) FIXME: Property 'type' does not exist on type '{}'.
  errors.type = typeValidator(type);

  return errors;
};

const mapStateToProps = (state: any) => ({
  isFetching: state.posts.isFetching,
  post: state.posts.newPost,
  form: state.form.createPost,
});

const mapDispatchToProps = { attemptCreatePost };

const enhance = compose(
  reduxForm({
    form: 'createPost',
    initialValues: { category: categories[0], type: 'link' },
    validate,
  }),
  withAuth,
  connect(mapStateToProps, mapDispatchToProps)
);

const CreatePostFormContainer = enhance(CreatePostForm);

export default CreatePostFormContainer;
