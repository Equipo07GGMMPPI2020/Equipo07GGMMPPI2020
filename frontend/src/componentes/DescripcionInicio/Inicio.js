import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Logo from "../imagen/Logo.jpg";
import "./estilos.css";

class Descripcion extends Component {
    render() {
        return (
            <div className="contener">
                <div className="Contenido">
                    <img className="Imagenlogo" src={Logo} />
                </div>
                <div className="descri">
                    <p> Lo que se encontrara en esta pagina es información clara y detallada sobre los niños autistas como los síntomas que presentan, las causas, las prevenciónes,como afecta el desarrollo mental, entre otras.
                        esto va ayudar mucho para que las demas personas tenga conocimiento de como se deben tratar  este tipo de personas. Tambien se pueden divertir en este aplicativo web
                        con links que los enviará inmediatamente a juegos muy didacticos para divertirse tanto los niños con este transtorno como sus familiares y amigos. Ya al final de la página
                        se encontraran con una encuesta de varias preguntas para lograr saber si tuvieron un buen desarrollo de las actividades y que si indagaron bien en la pagina, para terminar el usuario podra calificarnos y
                        hacer un comentario sobre como le pareció nuestra página web.
                    </p>
                </div>
                <div className = "botonDeInicio">
                <Link to="/iniciar seccion">
                    <button type = "button" className="boton">
                        Siguiente
                    </button>
                </Link>
                </div>
            </div>

        );
    }
}
export default Descripcion;
