/**
 * Action types
 */
export enum ProjectsTypes {
  LOAD_REQUEST = '@projects/LOAD_REQUEST',
  LOAD_SUCCCES = '@projects/LOAD_SUCCCES',
  LOAD_FAILURE = '@projects/LOAD_FAILURE',
  UPDATE_PROJECT_REQUEST = '@projects/UPDATE_PROJECT_REQUEST',
}

/**
 * Data types
 */
export interface ProjectRegisterResponse {
  id: number;
  projectId: number;
  date: Date;
  workedHours: number;
  userName: string;
}

export interface ProjectResponse {
  projectId: number;
  clientName: string;
  projectRegistratio: ProjectRegisterResponse[];
}

export interface ProjectsResponse {
  data: ProjectResponse[];
}

export interface BuildedUser {
  name: string;
  total: number;
  projectId: number;
  registerId: number;
  date: Date;
}

export interface Projectobjs {
  name: string;
  projectId: number;
  users: BuildedUser[];
  wrokedHouers: 0.0;
}

/**
 * State type
 */
export interface ProjectsPageObject{
  data: Projectobjs[]
}

export interface ProjectStates {
  data: Projectobjs[]
  details: ProjectResponse[]
}
