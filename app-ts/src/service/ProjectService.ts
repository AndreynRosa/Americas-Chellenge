import {
  BuildedUser,
  Projectobjs,
  ProjectRegisterResponse,
  ProjectsResponse,
} from '../store/ducks/project/types';
import api from './api';
import { getToken } from './localSrogaService';

class ProjectService {
  async findProjectByRole() {
    const reponse = await api.project.get('', {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    return reponse;
  }

  buildProjectsState(reponse: ProjectsResponse) {
    let buildedProjects = [] as Projectobjs[];
    let formatedProject: any;
    reponse?.data?.forEach((prod) => {
      formatedProject = {
        name: prod.clientName,
        projectId: prod.projectId,
        users: [],
        wrokedHouers: 0.0,
      };
      let users = [] as BuildedUser[];
      prod.projectRegistratio.forEach((register) => {
        buildUser(register, users);
      });
      let userGroupByName = groupByName(users);
      prod.projectRegistratio.forEach((register) => {
        formatedProject.wrokedHouers = calculateWorkedHoures(
          register,
          userGroupByName
        );
      });
      formatedProject.users = userGroupByName;
      buildedProjects.push(formatedProject);
    });
    return buildedProjects;
  }

  async updateProjectTIme(
    projectId: number,
    time: number,
    date: Date
  ): Promise<any> {
    const reponse = await api.project.post(
      'register',
      {
        projectId,
        date,
        time,
      },
      { headers: { Authorization: `Bearer ${getToken()}` } }
    );
    return reponse;
  }
}

export default ProjectService;

function calculateHoures(add1: number, add2: number) {
  let decilmalCalculation = add1 - Math.floor(add1) + (add2 - Math.floor(add2));
  if (decilmalCalculation - Math.floor(decilmalCalculation) > 0.6) {
    decilmalCalculation =
      +1 + (decilmalCalculation - Math.floor(decilmalCalculation) - 0.6);
  }
  return Math.floor(add1) + Math.floor(add2) + decilmalCalculation;
}

function buildUser(register: ProjectRegisterResponse, users: BuildedUser[]) {
  const { id, projectId, date, workedHours, userName } = register;
  let data = {
    registerId: id,
    projectId,
    date,
    total: workedHours,
    name: userName,
  } as BuildedUser;
  users.push(data);
  return users;
}

function groupByName(objects: BuildedUser[]) {
  objects.forEach((objA, index) => {
    objects.forEach((objB, indexB) => {
      if (objA.name === objB.name) {
        if (indexB !== index) {
          objects.splice(indexB, 1);
        }
      }
    });
  });
  return objects;
}

function calculateWorkedHoures(
  register: ProjectRegisterResponse,
  users: BuildedUser[]
) {
  let workedHoures = 0;
  users.forEach((user) => {
    if (user.name === register.userName && user.registerId !== register.id) {
      user.total = calculateHoures(user.total, register.workedHours);
    }
    workedHoures = calculateHoures(user.total, register.workedHours);
  });
  return workedHoures;
}
