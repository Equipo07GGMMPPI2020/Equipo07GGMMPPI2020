import React, {Component} from "react";
import Logo from "../imagen/Logo.jpg"
import "./estilos.css"

class Registro extends Component {
    render() {
        return (
            <div className="regis">
             <div className="registrate">     
                <div>
                <img className="Imagenes" src={Logo} />
                </div>

                <div>
                    <h2>Registrate y disfruta</h2>
                    <h3>Introduzca su información</h3>
                    <h5>Rellene los campos</h5>
                </div>

                <div>
                    <form className="inform">
                        <label>
                           correo electronico
                        </label>
                        <input className="correo class" type="email"/>

                        <label>
                            Crear una contraseña
                        </label>
                        <input className="contraseña class" type="password"/>

                        <label>
                            Vuelve a introducir la contraseña
                        </label>
                        <input className="Contraseña class" type="password"/>

                        <label>
                            nombre
                        </label>
                        <input className="Nombre class" type="text"/>

                        <label>
                            Apellido
                        </label>
                        <input className="Apellido class" type="text"/>  
                    </form>
                </div>
            </div>
         </div>




        );
    }
}

export default Registro;