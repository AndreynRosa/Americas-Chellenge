import { put, call } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import ProjectService from '../../../service/ProjectService';


const projectService = new ProjectService();

async function findProjectsByRole(
  action: ActionType<typeof actions.projectsLoadRequest>
) {
  const reponse = await projectService.findProjectByRole();
  return { data: projectService.buildProjectsState(reponse), details: reponse.data };
}

export function* asyncFindProjectsByRole(
  action: ActionType<typeof actions.projectsLoadRequest>
) {
  const response = yield call(findProjectsByRole, action);

  yield put({
    type: 'FIND_PROJECT_BY_ROLE',
    payload: { data: response.data, details: response.details },
  });
}
