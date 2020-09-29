import React, { Component } from "react";
import "./estilos.css"
import Logo from "../imagen/Logo.jpg";

class Msj extends Component {
    render() {
        return ( 
            <div className="todo">
                <div className="mj">
                  <p className="p">
                      Espacio para compartir con nostras sus opiniones y sugerencias
                  </p>
                  </div>
                  <div className="di">
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
                    <textarea className="cu"/>
                </form>
            
                <div className="boton">
                    <img className="imagen" src={Logo}/>
                    <button type = "button">
                        Siguiente
                    </button>
                </div>

            </div>
        );
    }
}

export default Msj;