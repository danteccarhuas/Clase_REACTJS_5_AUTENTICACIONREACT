import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Inicio from './Inicio';
import Nosotros from './Nosotros';
import Error from './Error';
import infoProductos from '../datos/datos.json';


//BrowserRouter: dentro de este componente va todo contenga el router
//Switch: permitira tener distintas rutas
class Router extends Component {

    state = {
        productos: []
    }

    componentWillMount(){
        this.setState({
            productos: infoProductos
        });
    }

    render() { 
        return ( 
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Inicio} />
                    <Route exact path="/nosotros" component={Nosotros} />
                    <Route component={Error}/>
                </Switch>
            </BrowserRouter>
         );
    }
}
 
export default Router;