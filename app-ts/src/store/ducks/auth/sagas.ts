import { put, call } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import AuthService from '../../../service/AuthService';
import { setJwtToLocalStorage } from '../../../service/localSrogaService';

const authService = new AuthService();

export function* getAuthUser(
  action: ActionType<typeof actions.authLoadRequest>
) {
  const response = yield call(authenticate, action);
  yield put({
    type: 'POST_AUTH',
    payload: { ...response },
  });
}

async function authenticate(
  action: ActionType<typeof actions.authLoadRequest>
) {
  const { email, password } = action.payload;
  const response = await authService.autheticate(email, password);
  if (response.status === 200) {
    setJwtToLocalStorage(response.data.jwt);
    return { isAuthUser: true };
  }
  return { isAuthUser: false };
}
