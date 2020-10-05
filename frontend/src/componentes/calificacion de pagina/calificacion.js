import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./estilos.css"
import Logo from "../imagen/Logo.jpg";
import Bueno from "../imagen/Logoos (4).jpg";
import Okey from "../imagen/LOGOS (5).jpg";
import Hola from "../imagen/LOGOS (6).jpg";
import LOGOS from "../imagen/LOGOS (7).jpg";

class Calificacion extends Component {
    render() {
        return (
            <div className="todoElContenedor">
              <div className="contenedorCalificativa">
                <div className="centrarContenido">
                  <div className="media">
                    <p>¿Como te parecio la aplicacion?</p>
                    <img className="imagenCalificada" src={Bueno}/>
                    <img className="imagenCalificada" src={Okey}/>
                    <img className="imagenCalificada" src={Hola}/>
                  </div>
                  <div className="media">
                    <p>¿Te ayudo a resolver dudas?</p>
                    <img className="imagenCalificada" src={Bueno}/>
                    <img className="imagenCalificada" src={Okey}/>
                    <img className="imagenCalificada" src={Hola}/>
                   </div>
                  <div>
                    <p>calificanos</p>
                    <img className="imagen" src={LOGOS}/>
                  </div>
                </div>
                <hr/>
                <div className="botonCalificativo">
                
                    <Link to="/Juegos"><button type = "button" className="boton">
                        Anterior
                        </button></Link>
                    <img className="imagen" src={Logo}/>

                    <Link to="/iniciar seccion"><button type="button" className="boton">
                        Cerrar
                    </button></Link>
                </div>
              </div>

            </div>

        );
    }
}

export default Calificacion;
