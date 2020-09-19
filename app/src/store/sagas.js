import { takeLatest, put, all, call, takeEvery } from 'redux-saga/effects';
import AuthService from '../service/AuthService';
import ProjectService from '../service/ProjectService';
import { setJwtToLocalStorage } from '../service/localSrogaService';

const projectService = new ProjectService();
const authService = new AuthService();

async function authenticate(action) {
  const { email, password } = action.payload;
  const response = await authService.autheticate(email, password);
  setJwtToLocalStorage(response.data.jwt);
  if (response.status === 200) {
    return { isAuthUser: true };
  }
  return { isAuthUser: false };
}

async function findProjectsByRole(action) {
  console.log('sagas');
  const reponse = await projectService.findProjectByRole();
  console.log('reponse ', reponse);
}
function* asyncFindProjectsByRole(action) {
  const response = yield call(findProjectsByRole, action);
}

function* asyncPostAuth(action) {
  const response = yield call(authenticate, action);
  yield put({
    type: 'POST_AUTH',
    payload: { ...response },
  });
}

export default function* root() {
  yield all([takeLatest('ASYNC_POST_AUTH', asyncPostAuth)]);
  yield all([
    takeLatest('ASYNC_FIND_PROJECT_BY_ROLE', asyncFindProjectsByRole),
  ]);
}
