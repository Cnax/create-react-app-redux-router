import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Main from './layout/Main';
import Welcome from './routes';
import Special from './routes/special';
import News from './routes/news';
import Tech from './routes/tech';
import Login from './routes/login';

const router = (history) => (
  <Router history={history}>
    <Route path="/" component={Main}>
      <IndexRoute component={Welcome} />
      <Route path="/special" component={Special} />
      <Route path="/news" component={News} />
      <Route path="/tech" component={Tech} />
      <Route path="/login" component={Login}/>
    </Route>
  </Router>
);

export default router;