export enum LogInStatus {
  NotLoggedIn = "NotLoggedIn",
  LoggedIn = "LoggedIn",
  LoggingIn = "LoggingIn",
  FailedToLogIn = "FailedToLogIn",
  ErrorLoggingIn = "ErrorLoggingIn"
}

export interface LogInState {
  status: LogInStatus;
}
