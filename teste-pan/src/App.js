import { Fragment } from 'react';
import Layout from './components/layout';
import Header from './components/header'
import UserList from './components/userList'
import GlobalStyle from './theme/globalStyle';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
        <Layout>
          <Header></Header>
          <UserList></UserList>
        </Layout>
    </Fragment>
  );
}

export default App;
