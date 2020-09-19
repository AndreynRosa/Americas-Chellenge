import { takeLatest, put, all, call, takeEvery } from 'redux-saga/effects';
import AuthService from '../service/AuthService';
import { setJwtToLocalStorage } from '../service/localSrogaService';

const authService = new AuthService();
async function test(action) {
  const { email, password } = action.payload;
  const response = await authService.autheticate(email, password);
  console.log('response', response);
  setJwtToLocalStorage(response.data.jwt);
  // console.log(response);
  if (response.status === 200) {
    return { isAuthUser: true };
  }
  return { isAuthUser: false };
}

function* asyncPostAuth(action) {
  const response = yield call(test, action);
  yield put({
    type: 'POST_AUTH',
    payload: { ...response },
  });
}

export default function* root() {
  yield all([takeLatest('ASYNC_POST_AUTH', asyncPostAuth)]);
}
