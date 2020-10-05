import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./estilos.css"
import LOGOS from "../imagen/LOGOS (1).jpg";
import Logo from "../imagen/Logo.jpg";

class Preguntas extends Component {
    render() {
        return (
            <div>
                <div className="titulo">
                    <h3>QUE ES AUTISMO</h3>
                    <img className="ImagenQue" src={LOGOS} />
                </div>

                <div>
                    <p>

                      El trastorno del espectro autista es una enfermedad relacionada con el desarrollo del cerebro que afecta la manera en la que una persona percibe y socializa con otras personas, lo que causa problemas en la interacción social y la comunicación. El trastorno también comprende patrones de conducta restringidos y repetitivos. El término «espectro» en el trastorno del espectro autista se refiere a un amplio abanico de síntomas y gravedad.
                      </p>
                     <p>
                        El trastorno del espectro autista comprende afecciones que anteriormente se consideraban independientes, como el autismo, el síndrome de Asperger, el trastorno desintegrativo infantil y una forma no especificada de trastorno generalizado del desarrollo. Algunas personas aún utilizan el término «síndrome de Asperger» que generalmente se considera que está en el período final leve del trastorno del espectro autista.
                        </p>

                        <p>
                        El trastorno del espectro autista comienza en los primeros años de la infancia y, a la larga, provoca problemas para desenvolverse en la sociedad, por ejemplo, en situaciones sociales, en la escuela y el trabajo. Los niños suelen presentar síntomas de autismo en el primer año. Un número reducido de niños parecen desarrollarse de forma normal en el primer año y luego pasan por un período de regresión entre los 18 y los 24 meses de edad, cuando aparecen los síntomas de autismo.
                        </p>
                        <p>
                        Si bien no existe una cura para los trastornos del espectro autista, un tratamiento intensivo y temprano puede hacer una gran diferencia en la vida de muchos niños.
                         </p>
                </div>
                <hr />
                <div className="botonPregunta">
                <Link to="/informacion"><button type = "button" className="boton">
                    Anterior
                    </button></Link>
                    <img className="imagen" src={Logo} />
                    <Link to="/juegos"><button type="button" className="boton">
                        Siguiente
                    </button></Link>
                </div>

            </div>
        )
    }
}
export default Preguntas;
