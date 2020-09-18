import React from 'react';

import { Container, GridContainer, GridItem } from './styles';

const Projects = () => {
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
