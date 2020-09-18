import styled, { css } from 'styled-components';

export const Btn = styled.button`
  width: 250px;
  padding: 5px;
  background: ${(props) => props.theme.colors.secundary};
  border: none;
  border-radius: 5px;
  height: 40px;
  font-weight: bold;
`;
