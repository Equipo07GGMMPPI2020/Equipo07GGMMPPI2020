import React, { Component } from "react";
import Logo from "../imagen/Logo.jpg";
import "./Estilos.css"
import Facebook from "./Facebook/Facebook";
import Google from "./Google/Google";

class Iniciosesion extends Component {
    render() {
        return (
            <div>
                <div className="Logo">
                    <img className="Imagenes" src={Logo} />

                </div>

                <div className="molk">
                    <form className = "inicio">
                        <h3>
                            Inicio sesion 
                        </h3>
                        <input className = "correo" type = "text" placeholder = "Usuario o correo electronico"/>
                        <input className = "correo" type = "password" placeholder = "Contraseña"/>
                        <input type = "submit" value = "Siguiente"/>
                        <div className = "face">
                        <Facebook />
                        <Google />
                        </div>
                        <p>
                            Si aun no se a registrado <a href = "#">Click aqui</a>
                        </p>
                    </form>   
                </div>  
            </div>

        );
    }
}
export default Iniciosesion;