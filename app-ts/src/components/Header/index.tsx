import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container } from './styles';
import { Btn } from '../Button/styles.';
import { cleanLocalStorage } from '../../service/localSrogaService';

interface HeaderProps {
  toggleTheme(): void
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      Project Register MVP
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
      />
      <Btn onClick={() => {
        cleanLocalStorage()
        window.location.reload()
      }}>
        Logout
      </Btn>
    </Container>
  );
};

export default Header;
