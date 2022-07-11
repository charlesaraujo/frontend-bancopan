import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import { UserProvider } from './hooks/useUser';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <UserProvider>
        <GlobalStyles />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
