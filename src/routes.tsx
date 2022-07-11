import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreateUser from './pages/CreateUserModal';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/create-user" component={CreateUser} />
    </Switch>
  );
};

export default Routes;
