import React, { Component } from "react";
import FacebookLogin from 'react-facebook-login';
import "../Estilos.css"

class facebook extends Component {
    render() {
         const respuestaFacebook = (respuesta) => {
         console.log(respuesta);
         }
        return (
            <div >
 <FacebookLogin
    appId="314509189774301"
    autoLoad={false}
    fields="name,email,picture"
    callback={respuestaFacebook}
    textButton = "Iniciar sesion con facebook"
    icon = "fa-facebook"
    cssClass = "Icono"/>

            </div>
        );
    }


}





export default facebook;