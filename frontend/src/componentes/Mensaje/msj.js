import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./estilos.css"
import Logo from "../imagen/Logo.jpg";

class Msj extends Component {
    render() {
        return (
          <div className="ContenedorMensaje">
            <div className="contenedortodo">
                <div className="mj">
                  <p className="parrafo">
                      Espacio para compartir con nostras sus opiniones y sugerencias
                  </p>
                  </div>
                  <div className="enviado">
                  <h4>
                      ENVIADO A:
                  </h4>
                  <p>
                      Niño-autistas@coronao.com
                  </p>

                </div>
                <form>
                    <h4>
                        MENSAJE:
                    </h4>
                    <textarea className="cuadroDeTexto"/>
                </form>

                <div className="botonmensaje">
                    <img className="imagen" src={Logo}/>
                    <Link to="/calificanos"><button type = "button" className="boton">
                        Siguiente
                    </button></Link>
                </div>

                </div>
            </div>
        );
    }
}

export default Msj;
