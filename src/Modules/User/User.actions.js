import createAction from '../../Helpers/actions'

export const UserActionConstants = {
    TEST_ACTION: "@@USER/TEST_ACTION",
}

export const UserActions = {
    testAction: () => createAction(UserActionConstants.TEST_ACTION)
}