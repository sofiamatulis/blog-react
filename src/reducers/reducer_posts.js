import _ from 'lodash';
import { FETCH_POSTS } from '../actions';
// by default the state is an object
export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
    console.log(action.payload.data); //array here
    //need to make it an object {4: post}
    return _.mapKeys(action.payload.data, 'id');
    default:
    return state;
  }
}
