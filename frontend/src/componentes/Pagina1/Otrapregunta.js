import React, { Component } from "react";
import "./style.css"
import LOGOS from "../imagen/LOGOS (3).jpg";
import Logo from "../imagen/Logo.jpg";

class Otrapregunta extends Component {
    render() {
        return (
            <div>
                <div className="titulo">
                    <h3>COMO EL AUTISMO AFECTA EL DESARROLO MENTAL</h3>
                    <img className="img" src={LOGOS} />
                </div>

                <div>
                    <p>
                       
                    El autismo impacta al desarrollo normal del cerebro en áreas relacionadas con la interacción social y las habilidades comunicativas. Los niños y adultos con autismo típicamente tienen deficiencias en la comunicación verbal y no verbal, en las interacciones sociales y en las actividades de ocio y juego. Este trastorno les dificulta comunicarse con otros y convertirse en miembros independientes de la comunidad. Pueden exhibir movimientos repetitivos del cuerpo (sacudimiento de la mano o balanceo del cuerpo), respuestas inusuales a la gente o apego a objetos y resistencia a cualquier cambio de rutinas. En algunos casos, muestran agresividad y/o un comportamiento con tendencias a hacerse daño a sí mismos.
                      </p>
                    <h3>
                    La Importancia de Difundir Conocimiento Sobre el Autismo
                    </h3>

                    <p>
                    La mayoría del público, incluso muchos profesionales de las disciplinas médicas, educativas y vocacionales, todavía no se han enterado de cómo el autismo afecta a la gente, y no saben trabajar efectivamente con individuos con autismo. La realización de un diagnóstico adecuado es difícil para el médico practicante con entrenamiento limitado o poca exposición al autismo, ya que las características de dicho trastorno varían mucho. Una breve observación en un solo medio ambiente no puede presentar un cuadro verdadero de las habilidades y patrones de comportamiento de un individuo. A primera vista, puede parecer que la persona con autismo tiene un trastorno de desarrollo intellectual , una incapacidad de aprendizaje o problemas de audición. Sin embargo, es importante distinguir el autismo de otras condiciones, ya que un diagnóstico preciso puede proporcionar la base para construir programas apropiados y efectivos de educación y tratamiento.
                    </p>
                </div>
                <hr />
                <div className="boton">
                    <button type="button">
                        Anterior
                    </button>
                    <img className="imagen" src={Logo} />
                    <button type="button">
                        Siguiente
                    </button>
                </div>

            </div>
        )
    }
}
export default Otrapregunta;