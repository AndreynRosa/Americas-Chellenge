import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  width: 100%;
  overflow: hidden;
  top: 0;

`;
