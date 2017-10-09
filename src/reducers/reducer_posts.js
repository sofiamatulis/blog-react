import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
// by default the state is an object
export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
      // if this state object has a key of the post id, just ommit it from the object
      // doesnt modify the current state
    case FETCH_POST:
    // const post = action.payload.data;
    // const newState = { ...state};
    // newState[post.id] = post;
    // return newState;
      return { ...state, [action.payload.data.id]: action.payload.data };

    case FETCH_POSTS:
    console.log(action.payload.data); //array here
    //need to make it an object {4: post}
    return _.mapKeys(action.payload.data, 'id');
    default:
    return state;
  }
}
