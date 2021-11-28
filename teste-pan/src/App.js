import { Fragment } from 'react';
import Layout from './components/layout';
import Header from './components/header'
import GlobalStyle from './theme/globalStyle';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Layout>
        <Header></Header>
      </Layout>
    </Fragment>
  );
}

export default App;
