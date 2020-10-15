import { UserActionConstants } from './User.actions';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case UserActionConstants.ATTEMPT_LOGIN:
      return state;
    default:
      return state;
  }
}