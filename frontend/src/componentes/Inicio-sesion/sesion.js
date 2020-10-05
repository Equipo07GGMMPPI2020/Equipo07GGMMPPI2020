import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Logo from "../imagen/Logo.jpg";
import "./Estilos.css"
import Facebook from "./Facebook/Facebook";
import Google from "./Google/Google";

class Iniciosesion extends Component {
    render() {
        return (
            <div className="contenedorSesion">
                <div className="Logo">
                    <img className="Imagenlogo" src={Logo} />

                </div>

                <div className="molk">
                    <form className = "inicio">
                        <h3>
                            Inicio sesion
                        </h3>
                        <input className = "correo" type = "text" placeholder = "Usuario o correo electronico"/>
                        <input className = "correo" type = "password" placeholder = "Contraseña"/>
                        <Link to="/perfil"><input type = "submit" value = "Siguiente" className="boton"/></Link>
                        <div className = "face">
                        <Facebook />
                        <Google />
                        </div>
                        <p>
                            Si aun no se a registrado <Link to = "/registrarse">Click aqui</Link>
                        </p>
                    </form>
                </div>
            </div>

        );
    }
}
export default Iniciosesion;
