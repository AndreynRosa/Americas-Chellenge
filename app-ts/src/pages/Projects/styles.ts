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
  grid-row: 1 / 2;
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 1rem;
  width: 80%;
  text-align: center;

`;

export const TableHeade = styled.th``;

export const TableCel = styled.td``;

export const Thead = styled.thead`
  text-align: center;
`;
