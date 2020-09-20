/**
 * Action types
 */
export enum AuthUserTypes {
  LOAD_REQUEST = '@users/LOAD_REQUEST',
  LOAD_SUCCCES = '@users/LOAD_SUCCCES',
  LOAD_FAILURE = '@users/LOAD_FAILURE',
}

/**
 * Data types
 */
export interface AuthUser {
  isAuthUser: boolean;
}

/**
 * State type
 */
export interface AuthUserState {
  readonly isAuthUser: boolean;
}
