import createAction from '../../Helpers/actions'

export const UserActionConstants = {
  ATTEMPT_LOGIN: "@@USER/ATTEMPT_LOGIN",
}

export const UserActionsCreators = {
  attemptLogin: (props) => createAction(UserActionConstants.ATTEMPT_LOGIN, props)
}