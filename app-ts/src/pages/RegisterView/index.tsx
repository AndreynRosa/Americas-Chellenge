import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Btn } from '../../components/Button/styles.';
import { AuthUserState } from '../../store/ducks/auth/types';
import { projectsLoadRequest } from '../../store/ducks/project/actions';
import { BuildedUser, ProjectRegisterResponse, ProjectStates } from '../../store/ducks/project/types';
import { getHouresTemplate } from '../../utils/timeUtils';

import { Table, TableHeade, TableCel, Container } from './styles';


interface RootState {
  project: ProjectStates;
  auth: AuthUserState;
}

const RegisterView: React.FC = () => {
  const [isLoadedData, setIsLoadedData] = useState(false);
  const [user, setUser] = useState<BuildedUser>()
  const [details, setDetails] = useState<ProjectRegisterResponse[]>();
  const stateProds = useSelector((state: RootState) => state.project.details);
  const history = useHistory();
  const dispatch = useDispatch();

  const loadDetailsRegister = useCallback(() => {
    let filterdRegister = [] as ProjectRegisterResponse[];
    stateProds.forEach((project) => {
      project.projectRegistratio.forEach((detailRegister) => {
        let isSmaneProject = project.projectId === detailRegister.projectId;
        let isCurrentUser = detailRegister.userName === user?.name;
        console.log("history?.location?.state",)
        if (isSmaneProject === isCurrentUser) {
          console.log("userrrname", detailRegister.userName)
          filterdRegister.push(detailRegister);
        }
      })
    })
    console.log("filterdRegister, ", filterdRegister)
    setDetails(filterdRegister);
  }, [stateProds, user]);

  useEffect(() => {
    const newLocal = JSON.stringify(history?.location?.state);
    let currentUser: BuildedUser = JSON.parse(newLocal);
    loadDetailsRegister();
    if (!isLoadedData) {
      setUser(currentUser);
      dispatch(projectsLoadRequest());
      setIsLoadedData(true);
    }
  }, [loadDetailsRegister, dispatch, history, isLoadedData])

  return (
    <Container>
      <h1>Register View </h1>

      {details ? buildViewTable(details) : <> </>}
    </Container>);
};

export default RegisterView;


function buildViewTable(registers: ProjectRegisterResponse[]) {
  return (
    <>

      < Table >
        <thead><h3>Programers</h3></thead>
        <tr>
          <TableHeade>Name</TableHeade>
          <TableHeade>Worked Houres</TableHeade>

        </tr>
        {registers ?
          registers.map((registerDetails => {
            return (
              <tbody>

                <TableCel>{registerDetails.userName}</TableCel>
                <TableCel>{getHouresTemplate(registerDetails.workedHours)}</TableCel>
              </tbody>)
          }))
          : ""}

      </ Table>
      <>
        <Btn onClick={() => { window.location.href = 'http://localhost:3000/project' }}>Back</Btn>
      </>
    </>)
}
