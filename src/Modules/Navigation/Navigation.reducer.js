import { Navigation } from "react-native-navigation";
import { NavigationActionConstants } from './Navigation.actions';

let INITIAL_STATE = {
  screenId: "",
}

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case NavigationActionConstants.PUSH_SCREEN:
      //Navigation.push();
      return state;
    default:
      return state;
  }
}