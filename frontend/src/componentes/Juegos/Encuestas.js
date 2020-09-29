import React, { Component } from "react";
import "./estilos.css"
import Logo from "../imagen/Logo.jpg";

class Encuestas extends Component {
    render() {
        return ( 
            <div>
                 <h3>ENCUESTAS</h3>
                 <hr/>
                 <div className="ju">
                     <p><a href="#">click</a> Primer encuesta </p>
                     <p><a href="#">click</a> Segunda encuesta </p>
                     <p><a href="#">click</a> Tercera encuesta </p>
                     <p><a href="#">click</a> Cuarta encuesta </p>
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

export default Encuestas ; 