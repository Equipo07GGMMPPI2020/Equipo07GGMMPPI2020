import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./estilos.css"
import Logo from "../imagen/Logo.jpg";

class Juegos extends Component {
    render() {
        return (
            <div className="todoContenedor">
                 <h3>JUEGOS</h3>
                 <hr/>
                 <div className="contenedorJuegos">
                 <div className="listaJuegos">
                     <p><a href="#">click</a> Primer juego </p>
                     <p><a href="#">click</a> Segundo juego </p>
                     <p><a href="#">click</a> Tercero juego </p>
                     <p><a href="#">click</a> Cuarto juego </p>
                     <p><a href="#">click</a> Quinto juego </p>
                     <p>Si tienes dudas ve a este Link <Link to="/dudas">click</Link></p>
                     </div>
                 </div>
                 <hr/>
                 <div className="botonJuegos">
                 <Link to="/informacion"><button type = "button" className="boton">
                     Anterior
                     </button></Link>
                    <img className="imagen" src={Logo}/>
                    <Link to="/encuestas"> <button type = "button" className="boton">
                        Siguiente
                    </button></Link>
                </div>

            </div>
        );
    }
}

export default Juegos ;
