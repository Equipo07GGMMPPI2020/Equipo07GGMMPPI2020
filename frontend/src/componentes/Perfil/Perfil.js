import React, { Component} from 'react';
import ImgPerfil from '../imagen/Perfil.jpg';
import './estilos.css';
import Logo from '../imagen/Logo.jpg';

class Perfil extends Component{
    render() {
        return(
            <div className="body">
            <div className="Todo">
                <div >
                    <h2>PERFIL</h2>
                    <img src={ImgPerfil} />
                </div>
                <div className="Info">
                    <h3>Nombre</h3>
                    <p>Rodolfo</p>
                </div>
                <div className="Info">
                    <h3>Apellido</h3>
                    <p>Sandemetrio</p>
                </div>
                <h3>Redes Sociales</h3>
                <div className="Info">
                    <h3>Correo</h3>
                    <p>Example@example.com</p>
                </div>
                <div className="Info">
                    <h3>Facebook</h3>
                    <p>Example Example</p>
                </div>
            </div>
            <div className="otro">
                <div>
                <img src={Logo} className="logo" />
                </div>
                <div>
                <button type="button" className="boton">Siguiente</button>
                </div>
            </div>
            </div>
        );
    }
}

export default Perfil;