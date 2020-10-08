import { UserActionConstants } from './User.actions';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case UserActionConstants.TEST_ACTION:
      console.log("Hello");
      return state;
    default:
      return state;
  }
}