import createAction from '../../Helpers/actions'

export const NavigationActionConstants = {
    PUSH_SCREEN: "@@NAVIGATION/PUSH_SCREEN",
}

export const NavigationActionCreators = {
    pushScreen: (props) => createAction(NavigationActionConstants.PUSH_SCREEN, props),
}

