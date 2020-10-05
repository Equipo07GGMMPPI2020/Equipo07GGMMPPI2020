import React, { Component } from "react";
import { Link } from 'react-router-dom'
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
                <Link to="/iniciar seccion">Regresar a la pagina principal</Link>
                <br/>
                </div>
                <hr/>

                <div className="contenedorImgBoton">
                <img className="Imagenlogo" src={Logo} />
                <Link to="/informacion"><button className="boton"type="button">
                    Siguiente
                </button></Link>
                </div>


            </div>

        );
    }
}
export default Avisos;
