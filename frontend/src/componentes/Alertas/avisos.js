import React, { Component } from "react";
import Logo from "../imagen/Logo.jpg"
import "./estilos.css"

class Avisos extends Component {
    render() {
        return (
            <div className="alert">
                <div className="text">
                    <h2>¡IMPORTANTE!</h2>
                    <p> SI iniciaste sesion es por que en verdad quieres conocer acerca de estos niños, no 
                        enviarnos malos comentarios porque si es asi tomaremos las medidas de denunciar, si 
                        no le interesa saber cerca de estos niños por favor de click en regresar a la pagina
                        principal! Gracias por su atencion, CONTINUEMOS!!

                    </p>
                </div>
                <div className="brhr">
                <a href="#">Regresar a la pagina principal</a>
                <br/>
                </div>
                <hr/>
                
                <div className="buton">
                   
                <img className="Imagenes" src={Logo} />
                <button className="boton"type="button">
                    Siguiente
                </button>
                </div>
               
                
            </div>

        );
    }
}
export default Avisos;