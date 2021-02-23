import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Timezones from './pages/Timezones/index'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route key={'/'} path={'/'} exact={true} component={Timezones} />
        <Redirect to={"/"} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
