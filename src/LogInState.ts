export class LogInStatus {
  public static NotLoggedIn: "NotLoggedIn" = "NotLoggedIn";
  public static LoggedIn: "LoggedIn" = "LoggedIn";
  public static LoggingIn: "LoggingIn" = "LoggingIn";
  public static FailedToLogIn: "FailedToLogIn" = "FailedToLogIn";
  public static ErrorLoggingIn: "ErrorLoggingIn" = "ErrorLoggingIn";
}

export class UserRole {
  public static SALES: "sales" = "sales";
  public static TRADER: "trader" = "trader";
  public static SALESTRADER: "salestrader" = "salestrader";
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

export type LogInState =
  | NotLoggedIn
  | LoggedIn
  | LoggingIn
  | FailedToLogIn
  | ErrorLoggingIn;
