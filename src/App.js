import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Echo from './components/Echo';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <h1>Welcome</h1>
        </Route>
        <Route path="/:message/:color/:background">
          <Echo />
        </Route>
        <Route path="/:message">
          <Echo />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
