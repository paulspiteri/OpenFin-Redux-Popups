export class LogInStatus {
  static NotLoggedIn: 'NotLoggedIn' = 'NotLoggedIn';
  static LoggedIn: 'LoggedIn' = 'LoggedIn';
  static LoggingIn: 'LoggingIn' = 'LoggingIn';
  static FailedToLogIn: 'FailedToLogIn' = 'FailedToLogIn';
  static ErrorLoggingIn: 'ErrorLoggingIn' = 'ErrorLoggingIn';
}

export class UserRole {
  static SALES: "sales" = 'sales';
  static TRADER: "trader" = 'trader';
  static SALESTRADER: "salestrader" = 'salestrader';
}

export interface NotLoggedIn {
  status: typeof LogInStatus.NotLoggedIn;
}

export interface LoggedIn {
  status: typeof LogInStatus.LoggedIn;
}

export interface LoggingIn {
  status: typeof LogInStatus.LoggingIn;
}

export interface FailedToLogIn {
  status: typeof LogInStatus.FailedToLogIn;
  error: string;
}

export interface ErrorLoggingIn {
  status: typeof LogInStatus.ErrorLoggingIn;
}

export type LogInState = NotLoggedIn | LoggedIn | LoggingIn | FailedToLogIn | ErrorLoggingIn;
