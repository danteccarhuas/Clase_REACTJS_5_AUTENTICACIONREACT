import React, { Component } from 'react';
import './Navegacion.css'
import {NavLink} from 'react-router-dom';

class Navegacion extends Component {

    iniciarSession = () => {
        this.props.auth.login();
    }

    cerrarSession = ()=> {
        this.props.auth.logout();
    }

    componentWillMount() {
        console.log('Se ejecuta componentWillMount')
      }
    
      componentDidMount() {
        console.log('Se ejecuta componentDidMount')
      }
    
      componentWillReceiveProps(nextProps) {
        console.log('Se ejecuta componentWillReceiveProps con las propiedades futuras', nextProps)
      }
    
      shouldComponentUpdate(nextProps, nextState) {
        console.log('Ejecutando shouldComponentUpdate. Próximas propiedades y estado: ', nextProps, nextState)
        // debo devolver un boleano
        return true
      }
    
      componentWillUpdate(nextProps, nextState) {
        console.log('Ejecutando componentWillUpdate. Próximas propiedades y estado: ', nextProps, nextState)
      }
    
      componentDidUpdate(prevProps, prevState) {
        console.log('Ejecutando componentDidUpdate. Anteriores propiedades y estado: ', prevProps, prevState)    
      }
    
      componentWillUnmount() {
        console.log('Se desmonta el componente...')
      }

    render(){
        //console.log(this.props.auth);
        //console.log(this.props.auth.getAccessToken());

        const { isAuthenticated } = this.props.auth;
        let resultado;
        if(isAuthenticated()){
            resultado = <a onClick={this.cerrarSession}>Cerrar Sesión</a>
        }else{
            resultado = <a onClick={this.iniciarSession}>Iniciar Sesión</a>
        }

        return ( 
            <nav className="navegacion">
                <NavLink to={'/nosotros'} activeClassName="activo">Nosotros</NavLink>
                <NavLink to={'/productos'} activeClassName="activo">Productos</NavLink>
                <NavLink to={'/contacto'} activeClassName="activo">Contacto</NavLink>
                {resultado}
            </nav>
         );
    }
}
 
export default Navegacion;