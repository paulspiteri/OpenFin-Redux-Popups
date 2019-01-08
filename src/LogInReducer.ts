import { LogInState, LogInStatus } from './LogInState';
import { LogInActionTypes } from './LogInActions';
import ApplicationAction from './ApplicationAction';

const initialState = {
  status: LogInStatus.NotLoggedIn
};

export default function (state: LogInState = initialState, action: ApplicationAction): LogInState {
  switch (action.type) {
    case LogInActionTypes.Submit:
      return {status: LogInStatus.LoggingIn};

    case LogInActionTypes.Succeeded:
      return {
        status: LogInStatus.LoggedIn,
      };

    case LogInActionTypes.Failed:
      return {
        status: LogInStatus.FailedToLogIn,
        error: action.error ? action.error : 'Login Failed.'
      };

    case LogInActionTypes.Error:
      return {
        status: LogInStatus.ErrorLoggingIn,
      };

    default:
      return state;
  }
}
