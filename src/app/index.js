import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <h1>home</h1>
        <Link to="/test">test route</Link>
      </Route>
      <Route exact path="/test">
        <h1>test</h1>
        <Link to="/">home route</Link>
      </Route>
    </Switch>
  );
};

export default App;
