import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Btn } from '../../components/Button/styles.';

import { CustomDraggableDialog } from '../../components/CustomDraggableDialog/CustomDraggableDialog';
import Input from '../../components/Input';
import ProjectService from '../../service/ProjectService';
import { AuthUserState } from '../../store/ducks/auth/types';
import { projectsLoadRequest } from '../../store/ducks/project/actions';
import { BuildedUser, ProjectStates } from '../../store/ducks/project/types';

import {
  Container,
  GridContainer,
  GridItem,
  Table,
  TableCel,
  TableHeade,
} from './styles';
import { useHistory } from 'react-router-dom';
import { getHouresTemplate } from '../../utils/timeUtils';
import { getEmailToLocalStorage } from '../../service/localSrogaService';

interface RootState {
  project: ProjectStates;
  auth: AuthUserState;
}

const Projects = () => {
  const history = useHistory();
  const [isLoadedData, setIsLoadedData] = useState(false);
  const [projects, setProjects] = useState<ProjectStates>()


  const dispatch = useDispatch();
  const stateProds = useSelector((state: RootState) => state.project);

  const projectService = new ProjectService();


  const handleSubmit = useCallback(async (e, projectId) => {
    e.preventDefault();
    const time = e.target.time.value;
    const date = new Date(e.target.date.value);
    try {
      await projectService.updateProjectTIme(
        projectId, time, date
      )
    } catch (e) {
      alert(e);
    }
    setIsLoadedData(true);
    window.location.reload();

  }, [projectService]);

  useEffect(() => {
    setProjects(stateProds);
    if (!isLoadedData) {
      dispatch(projectsLoadRequest());
      setIsLoadedData(true);
    }
  }, [projects, stateProds, isLoadedData, dispatch]);

  return (
    <>
      <Container>
        <h1>Projects</h1>
        <GridContainer>
          <>
            {projects ? projects?.data.map((prod) => {
              return (
                <GridItem key={prod.projectId}>

                  <h2>{prod.name}</h2>

                  <h4>{getHouresTemplate(prod.wrokedHouers)}
                  </h4>

                  {userTable(prod.users, history)}
                  <CustomDraggableDialog title={"Register wirked houers"} btnName={"Register Work"} >
                    <div>
                      <form onSubmit={(e) => handleSubmit(e, prod.projectId)}>
                        <Input style={{ height: "2rem", width: '100%' }} label={"time"} type="number" step="0.01" name="time" placeholder={'Time'} required />
                        <Input style={{ height: "2rem", width: '100%' }} label={"Date"} type="date" name="date" placeholder={'Date'} required />
                        <Btn style={{ marginTop: "1rem" }} type="submit">Salvar</Btn>
                      </form>
                    </div>
                  </CustomDraggableDialog >

                </GridItem>);
            }) : "Not found"}

          </>
        </GridContainer>
      </Container>
    </>
  );
};


export default Projects;
function userTable(users: BuildedUser[], history: any) {
  return users.map(user => {
    return (
      <Table key={user.name}>
        <thead>

          <TableHeade>Name</TableHeade>
          <TableHeade>Worked Houres</TableHeade>
          <TableHeade>View </TableHeade>
        </thead>
        <tbody>
          <TableCel>{user.name}</TableCel>
          <TableCel>{getHouresTemplate(user.total)}</TableCel>
          <TableCel>
            <Btn disabled={user.name !== getEmailToLocalStorage() && !getEmailToLocalStorage()?.includes("adm")} onClick={() => { history.push({ pathname: '/register', state: user }) }}>
              View Details
          </Btn>
          </TableCel>
        </tbody>
      </Table>
    )
  })
}


