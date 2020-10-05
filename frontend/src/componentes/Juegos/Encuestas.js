import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./estilos.css"
import Logo from "../imagen/Logo.jpg";

class Encuestas extends Component {
    render() {
        return (
            <div className="todoContenedor">
                 <h3>ENCUESTAS</h3>
                 <hr/>
                 <div className="contenedorJuegos">
                 <div className="listaJuegos">
                     <p><a href="#">click</a> Primer encuesta </p>
                     <p><a href="#">click</a> Segunda encuesta </p>
                     <p><a href="#">click</a> Tercera encuesta </p>
                     <p><a href="#">click</a> Cuarta encuesta </p>
                     <p>Si tienes dudas ve a este Link <Link to="/dudas">click</Link></p>
                     </div>
                 </div>
                 <hr/>
                 <div className="botonJuegos">
                 <Link to="/juegos"><button type = "button" className="boton">
                        Anterior
                    </button></Link>
                    <img className="imagen" src={Logo}/>
                    <Link to="/dudas"><button type = "button" className="boton">
                        Siguiente
                    </button></Link>
                </div>

            </div>
        );
    }
}

export default Encuestas ;
