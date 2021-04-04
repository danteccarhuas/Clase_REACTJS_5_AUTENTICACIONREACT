import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header/Header';
import Navegacion from './Navegacion/Navegacion';
import Productos from './Productos/Productos';
import Nosotros from './Nosotros/Nosotros';
import Error from './Error/Error';
import infoProductos from '../datos/datos.json';
import SingleProducto from './SingleProducto/SingleProducto';
import Contacto from './Contacto/Contacto';


//BrowserRouter: dentro de este componente va todo contenga el router
//Switch: permitira tener distintas rutas
class Router extends Component {

    state = {
        productos: [],
        terminoBusqueda: ''
    }

    componentWillMount(){
        this.setState({
            productos: infoProductos
        });
    }

    busquedaProducto = (busqueda) => {
        if(busqueda.length > 3){
            this.setState({
                terminoBusqueda: busqueda
            });
        }else{
            this.setState({
                terminoBusqueda: ''
            });
        }
    }

    render() {
        
        let productos = [...this.state.productos];
        let busqueda = this.state.terminoBusqueda;
        let resultado;

        if(busqueda !== ''){
            resultado = productos.filter(producto => (
                producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1
            ));
        }else{
            resultado = productos;
        }

        return ( 
            <BrowserRouter>
                <Header />
                <Navegacion />
                <Switch>
                    <Route exact path="/" render={()=>(
                        <Productos 
                            productos={resultado}
                            busquedaProducto={this.busquedaProducto}
                        />
                    )} />
                    <Route exact path="/nosotros" component={Nosotros} />
                    <Route exact path="/productos" render={()=>(
                        <Productos 
                            productos={resultado}
                            busquedaProducto={this.busquedaProducto}
                        />
                    )} />
                    <Route exact path="/producto/:productoId" render={(props)=>{
                        let idProducto = props.location.pathname.replace('/producto/','');
                        return (
                            <SingleProducto 
                                producto={this.state.productos[idProducto]}
                            />
                        )
                    }} />
                    <Route exact path="/contacto" component={Contacto}/>
                    <Route component={Error}/>
                </Switch>
            </BrowserRouter>
         );
    }
}
 
export default Router;