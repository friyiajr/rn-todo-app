import { Navigation } from "react-native-navigation";
import { NavigationActionConstants } from './Navigation.actions';

let INITIAL_STATE = {
  componentId: "",
}

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case NavigationActionConstants.PUSH_SCREEN:
      const { componentId, targetScreen } = action.payload;
      Navigation.push(componentId, {
        component: {
          name: targetScreen,
          options: {
            topBar: {
              visible: false
            }
          }
        }
      });
      return { ...state, componentId: componentId };
    default:
      return state;
  }
}