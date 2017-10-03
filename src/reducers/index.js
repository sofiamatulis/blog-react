import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
// import of the reducer , outside of this file we would refer it as formReducer (re-naming it to avoid issues)
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
