import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Result from '../pages/Result';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/resultado" exact component={Result} />
    </Switch>
  );
}