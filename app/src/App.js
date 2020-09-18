import React from 'react';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import light from './styles/themes/ligth';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import usePersistedState from './utils/usePersistedState';
import Header from './components/Header/index';


const App = () => {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes></Routes>
          <Header toggleTheme={toggleTheme} />
          <GlobalStyle />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
