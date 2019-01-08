export class LogInActionTypes {
  static Submit: 'LogIn/Submit' = 'LogIn/Submit';
  static Succeeded: 'LogIn/Succeeded' = 'LogIn/Succeeded';
  static Failed: 'LogIn/Failed' = 'LogIn/Failed';
  static Error: 'LogIn/Error' = 'LogIn/Error';
}

export interface LogInSubmitAction {
  type: typeof LogInActionTypes.Submit;
  username: string;
  password: string;
}

export interface LogInSucceededAction {
  type: typeof LogInActionTypes.Succeeded;
}

export interface LogInFailedAction {
  type: typeof LogInActionTypes.Failed;
  error: string;
}

export interface LogInErrorAction {
  type: typeof LogInActionTypes.Error;
}

export const createSubmitLogin = (username: string, password: string): LogInSubmitAction => ({
  type: LogInActionTypes.Submit,
  username,
  password
});

export const createLoginSucceeded = (): LogInSucceededAction => ({
  type: LogInActionTypes.Succeeded,
});

export const createLoginFailed = (error: string): LogInFailedAction => ({
  type: LogInActionTypes.Failed,
  error
});

export const createLoginError = (): LogInErrorAction => ({
  type: LogInActionTypes.Error,
});

export type LogInAction = LogInSubmitAction | LogInSucceededAction | LogInFailedAction | LogInErrorAction;
