import React from 'react';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import light from './styles/themes/ligth';
import dark from './styles/themes/dark';
import AppProvider from './hooks/index';

import GlobalStyle from './styles/global';
import usePersistedState from './utils/usePersistedState';
import Header from './components/Header/index';
import { createBrowserHistory } from 'history';
import store from './store/store';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

const App = () => {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  const hist = createBrowserHistory();
  return (
    <>
      <Router history={hist}>
        <ThemeProvider theme={theme}>
          <Routes />
          <Header toggleTheme={toggleTheme} />

          <GlobalStyle />
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
