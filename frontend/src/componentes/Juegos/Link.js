import React, { Component } from "react";
import "./estilos.css"
import Logo from "../imagen/Logo.jpg";

class Link extends Component {
    render() {
        return ( 
            <div>
                 <h3>JUEGOS</h3>
                 <hr/>
                 <div className="ju">
                     <p><a href="#">click</a> Primer juego </p>
                     <p><a href="#">click</a> Segundo juego </p>
                     <p><a href="#">click</a> Tercero juego </p>
                     <p><a href="#">click</a> Cuarto juego </p>
                     <p><a href="#">click</a> Quinto juego </p>
                     <p>Si tienes dudas ve a este Link  <a href="#">click</a></p>  
                 </div>
                 <hr/>
                 <div className="boton">
                <button type = "button">
                        Anterior
                    </button>
                    <img className="imagen" src={Logo}/>
                    <button type = "button">
                        Siguiente
                    </button>
                </div>

            </div>
        );
    }
}

export default Link ; 