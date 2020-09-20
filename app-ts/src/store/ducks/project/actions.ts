import { action } from 'typesafe-actions';
import { ProjectsTypes } from './types';

export const projectsLoadRequest = () => {
  return action(ProjectsTypes.LOAD_REQUEST);
};
export const projectsLoadSuccess = (projects: any) => {
  return action(ProjectsTypes.LOAD_SUCCCES, { ...projects});
};
export const projectsLoadFailure = () => action(ProjectsTypes.LOAD_FAILURE);

export const projectsUpdateRequest = () => {
  return action(ProjectsTypes.UPDATE_PROJECT_REQUEST);
};
