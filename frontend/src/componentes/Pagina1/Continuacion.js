import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./stilos.css"
import LOGOS from "../imagen/LOGOS (2).jpg";
import Logo from "../imagen/Logo.jpg";

class Continuacion extends Component {
    render() {
        return (
            <div>
                <div className="titulo">
                    <h3>CUALES SON LOS SIGNOS Y LOS SINTOMAS DE ESTE TRASTORNO</h3>
                    <img className="img" src={LOGOS} />
                </div>

                <div>
                    <p>

                    Algunos niños presentan signos del trastorno del espectro autista en la primera infancia, como menor contacto visual, falta de respuesta cuando los llaman por su nombre o indiferencia ante las personas responsables del cuidado. Otros niños pueden desarrollarse normalmente durante los primeros meses o años de vida, pero luego repentinamente se vuelven introvertidos o agresivos o pierden habilidades del lenguaje que habían adquirido. En general, los signos se observan a los 2 años.
                      </p>
                     <p>
                     Es probable que los trastornos del espectro autista tengan un patrón de comportamiento y un nivel de gravedad únicos en cada niño, desde un funcionamiento bajo hasta uno alto.
                        </p>

                        <p>
                        Algunos niños con trastornos del espectro autista tienen dificultades de aprendizaje y algunos presentan signos de inteligencia inferiores a lo normal. Otros niños con este trastorno tienen una inteligencia entre normal y alta, aprenden rápido, aunque tienen problemas para comunicarse, aplicar lo que saben en la vida diaria y adaptarse a situaciones sociales.
                        </p>
                        <p>
                        Debido a la combinación única de síntomas que presenta cada niño, a veces, puede ser difícil determinar la gravedad. En general, se basa en el nivel de deterioro y en cómo afecta la capacidad de desenvolverse.
                        </p>

                        A continuación, se presentan algunos signos frecuentes que tienen las personas con trastornos del espectro autista.
                         <h3>Comunicación e interacción social</h3>
                         Un niño o un adulto con trastorno del espectro autista puede tener problemas con la interacción social y las habilidades de comunicación, incluso presentar cualquiera de los siguientes signos:
                      <ul>
                          <li>
                          No responde a su nombre o, en ocasiones, parece no escucharte
                          </li>
                          <li>
                          Se resiste a los abrazos y las caricias; además, parece que prefiere jugar solo y se abstrae en su propio mundo
                          </li>
                          <li>
                          No suele hacer contacto visual y carece de expresión facial
                          </li>
                          <li>
                          No habla o tiene un desarrollo tardío del habla, o bien pierde la capacidad que tenía para decir palabras u oraciones
                          </li>
                          <li>
                          No puede mantener ni iniciar una conversación o, tal vez, inicia una solamente para pedir algo o nombrar elementos
                          </li>
                          <li>
                          Habla con tono o ritmo anormal y es posible que utilice una voz cantarina o que hable como un robot
                          </li>
                          <li>
                          Repite palabras o frases textuales, pero no comprende cómo usarlas
                          </li>
                          <li>
                          No parece entender preguntas o indicaciones simples
                          </li>
                          <li>
                          No expresa emociones ni sentimientos y parece no ser consciente de los sentimientos de los demás
                          </li>
                          <li>
                          No señala ni trae objetos para compartir sus intereses
                          </li>
                          <li>
                          Aborda interacciones sociales de forma inadecuada comportándose de manera pasiva, agresiva o perturbadora
                          </li>
                          <li>
                          Tiene dificultad para reconocer señales no verbales, como la interpretación de las expresiones faciales de otras personas, las posturas corporales o el tono de voz
                          </li>
                      </ul>
                      <p><Link to="/dudas">Link</Link> Para resolver dudas</p>


                </div>
                <hr />
                <div className="botonSintomas">
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
export default Continuacion;
