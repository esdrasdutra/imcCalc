import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Calculator from '../pages/Calculator';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/contact" exact component={Calculator} />
    </Switch>
  );
}