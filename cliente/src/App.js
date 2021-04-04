import React, { Component } from 'react';
import { makeMainRoutes } from './componentes/routes';
//import Router from './componentes/Router';

const routes = makeMainRoutes();

class App extends Component {
  render(){
    return (
      <React.Fragment>
        {routes}
      </React.Fragment>
    );
  }
}

export default App;
