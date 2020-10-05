import React, {Component} from "react";
import { Link } from 'react-router-dom'
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
                    <div className="infor">
                        <Link to="/que es" className="did">
                            <p>Que es autismos</p>
                        </Link>
                        <Link to="/sintomas" className="did">
                            <p>Cuales son los signos y sintomas de este transtorno</p>
                        </Link>
                        <Link to="/desarrollo" className="did">
                            <p>Como el autismo afecta el desarollo mental</p>
                        </Link>
                    </div>

                </div>
                <hr/>
                <div className="botonesAviso">
                    <Link to="/aviso"><button type = "button" className="boton">
                        Anterior
                        </button></Link>
                    <img className="imagen" src={Logo}/>
                    <Link to="/juegos"><button type="button" className="boton">
                        Siguiente
                    </button></Link>
                </div>

            </div>

        );
    }
}











export default Inform;
