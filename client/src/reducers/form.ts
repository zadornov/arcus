import { reducer as formReducer } from 'redux-form';
import { CREATE_COMMENT_SUCCESS } from '../actions/posts';

export default formReducer.plugin({
  comment: (state: any, action: any) => {
    switch (action.type) {
      case CREATE_COMMENT_SUCCESS:
        return undefined;
      default:
        return state;
    }
  },
});
