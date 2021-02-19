import React, { Component } from 'react';
import './Nosotros.css';

class Nosotros extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/camisa_1.png" alt="imagen nosotros"/>
                </div>
                <div className="contenido">
                    <h2>Sobre Nosotros</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh nec sapien commodo tempus eget fringilla est. Aenean tempus tortor velit, eget eleifend nisl bibendum ut. Duis vestibulum nunc lacinia nulla cursus consectetur. Proin interdum nisl a diam rhoncus ultricies. Fusce eget gravida ipsum. Cras auctor ullamcorper porttitor. Donec euismod cursus ornare. Mauris pharetra ex ligula, nec auctor tellus ultricies vitae. Aliquam non fringilla velit. Ut scelerisque velit molestie erat blandit mattis. Quisque neque dui, venenatis nec varius ac, tincidunt et justo. Cras dignissim egestas magna quis gravida. Proin sed justo tortor. Nullam eu leo at urna congue aliquet ut non lectus. Quisque consectetur dictum ullamcorper. Aenean scelerisque mauris sit amet arcu lacinia, nec auctor arcu ultricies.
                    </p>
                </div>
            </div>
         );
    }
}
 
export default Nosotros;