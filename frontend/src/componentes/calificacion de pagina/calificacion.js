import React, { Component } from "react";
import "./estilos.css"
import Logo from "../imagen/Logo.jpg";
import Bueno from "../imagen/Logoos (4).jpg";
import Okey from "../imagen/LOGOS (5).jpg";
import Hola from "../imagen/LOGOS (6).jpg";
import LOGOS from "../imagen/LOGOS (7).jpg";

class Calificacion extends Component {
    render() {
        return ( 
            <div>
                <div>
                <p>
                    ¿Como te parecio la aplicacion?
                    <img className="imagen" src={Bueno}/>
                    <img className="imagen" src={Okey}/>
                    <img className="imagen" src={Hola}/>
                
                   
                </p>
                </div>
<p>
    ¿Te ayudo a resolver dudas?
    <img className="imagen" src={Bueno}/>
    <img className="imagen" src={Okey}/>
    <img className="imagen" src={Hola}/>
</p>
                <div>
            <p>
                calificanos
                <img className="imagen" src={LOGOS}/>
            </p>
                </div>

                <div>

                </div>
<hr/>
                <div className="boton">
                <button type = "button">
                        Anterior
                    </button>
                    <img className="imagen" src={Logo}/>

                </div>

                
            </div>

        );
    }
}

export default Calificacion;