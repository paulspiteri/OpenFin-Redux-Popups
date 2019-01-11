import AppAction from "./AppAction";
import { LogInActionTypes } from "./LogInActions";
import { LogInState, LogInStatus } from "./LogInState";

const initialState = {
  status: LogInStatus.NotLoggedIn
};

export default function(
  state: LogInState = initialState,
  action: AppAction
): LogInState {
  switch (action.type) {
    case LogInActionTypes.Submit:
      return {
        status: LogInStatus.LoggingIn
      };

    case LogInActionTypes.Succeeded:
      return {
        status: LogInStatus.LoggedIn
      };

    case LogInActionTypes.Failed:
      return {
        status: LogInStatus.FailedToLogIn
      };

    case LogInActionTypes.Error:
      return {
        status: LogInStatus.ErrorLoggingIn
      };

    default:
      return state;
  }
}
