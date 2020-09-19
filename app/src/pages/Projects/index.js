import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findProjectsByRoleAcess } from '../../store/actions/project';

import { Container, GridContainer, GridItem } from './styles';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const dispatch = useDispatch();
  const feachPorjects = useSelector((state) => state.project.projects);

  useEffect(() => {
    console.log('feachPorjects ', feachPorjects);
    if (projects?.length === 0) {
      dispatch(findProjectsByRoleAcess());
    }
    setProjects(feachPorjects);
  }, [projects]);
  return (
    <>
      <Container>
        <h1>Projects</h1>{' '}
        <GridContainer>
          <GridItem>1</GridItem>
          <GridItem>2</GridItem>
        </GridContainer>
      </Container>
    </>
  );
};

export default Projects;
