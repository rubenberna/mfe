import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

// Whenever material ui generates the production classNames with a more or less random name, we want to prefix it
// with 'ma' to prevent classname collisions
const generateClassName = createGenerateClassName({
  productionPrefix: 'ma'
})

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/pricing" component={Pricing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  )
}
