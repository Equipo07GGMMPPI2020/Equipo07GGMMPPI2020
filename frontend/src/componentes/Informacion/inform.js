import React, {Component} from "react";
import LOGOS from "../imagen/LOGOS.jpg"
import "./estilos.css"
import Logo from "../imagen/Logo.jpg";

class Inform extends Component {
    render() {
        return (
            <div>
                <div className="Inicial">
                    <h2>QUE DESEAS SABER</h2>
                    <img className="Imagenes" src={LOGOS} />
                </div>
                <hr/>
                <div className="preg">
                    <ul className="infor">
                        <li className="did">
                            <a href="#">Que es autismos</a> 
                        </li>
                        <li className="did">
                            <a href="#">Cuales son los signos y sintomas de este transtorno</a>
                        </li>
                        <li className="did">
                            <a href="#">Como el autismo afecta el desarollo mental</a>
                        </li>
                    </ul>
                    
                </div>
                <hr/>
                <div className="img">
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











export default Inform;