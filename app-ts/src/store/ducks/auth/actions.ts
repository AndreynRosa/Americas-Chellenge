
import { action } from 'typesafe-actions';
import { AuthUserTypes } from './types';

export const authLoadRequest = (email: string, password: string) => {
  return action(AuthUserTypes.LOAD_REQUEST, {email, password});
};
export const authLoadSuccess = (isAuthUser: boolean) => {
  console.log("passou", isAuthUser)
  return action(AuthUserTypes.LOAD_SUCCCES, { isAuthUser });
};
export const authLoadFailure = () => action(AuthUserTypes.LOAD_FAILURE);


