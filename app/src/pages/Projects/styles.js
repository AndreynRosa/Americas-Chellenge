import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
  margin: auto;
  width: 80%;
  min-height: 30rem;
  margin-top: 8rem;
  padding: 10px;
  text-align: center;
`;

export const GridContainer = styled.div`
  display: row;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  padding: 10px;
`;

export const GridItem = styled.div`
  grid-row: 1 /  2;
`;
