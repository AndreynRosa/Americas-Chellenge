
import { all, takeEvery } from 'redux-saga/effects';
import { getAuthUser } from './auth/sagas';
import { asyncFindProjectsByRole } from './project/sagas';

import { AuthUserTypes } from './auth/types';
import { ProjectsTypes } from './project/types';




export default function* rootSaga() {
  return yield all([
    takeEvery(AuthUserTypes.LOAD_REQUEST, getAuthUser),
    takeEvery(ProjectsTypes.LOAD_REQUEST, asyncFindProjectsByRole),

  ]);
}
