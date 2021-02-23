import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AxiosInstanceProvider from '../shared/context/AxiosInstanceProvider';
import Timezones from './pages/Timezones/index'

const App = () => {
  return (
    <AxiosInstanceProvider>
      <BrowserRouter>
        <Switch>
          <Route key={'/'} path={'/'} exact={true} component={Timezones} />
          <Redirect to={"/"} />
        </Switch>
      </BrowserRouter>
    </AxiosInstanceProvider>
  );
}

export default App;
