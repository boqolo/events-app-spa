import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { load_page } from './api';
import { Container } from 'react-bootstrap';
import Default from './views/404';
import Index from './views/Index';
import Header from './comp/Header';
import Events from './views/Events';
import Users from './views/Users';

function App() {

  React.useEffect(() => {
    // FIXME only if auth
    // load_page();
  }, []);

  return (
    <Container className="text-light">
      <Header />
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="*">
          <Default />
        </Route>
      </Switch>
      <footer className="my-auto p-4 footer">
        <span className="text-muted">
          {"Events @ measuringworm"}
        </span>
      </footer>
    </Container>
  );
}

export default App;
