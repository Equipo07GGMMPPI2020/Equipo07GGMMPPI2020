import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Preguntas from './componentes/Pagina1/Preguntas';
import Perfil from "./componentes/Perfil/Perfil";
import Sesion from "./componentes/Inicio-sesion/sesion";
import Inicio from "./componentes/DescripcionInicio/Inicio";
import Registrarse from "./componentes/Registrarse/Registro";
import Avisos from "./componentes/Alertas/avisos";
import Informacion from "./componentes/Informacion/inform";
import Juegos from "./componentes/Juegos/Link";
import Encuestas from "./componentes/Juegos/Encuestas";
import Msj from "./componentes/Mensaje/msj";
import Sintomas from "./componentes/Pagina1/Continuacion";
import Desarrollo from "./componentes/Pagina1/Otrapregunta";
import Calificacion from "./componentes/calificacion de pagina/calificacion";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/iniciar seccion" component={Sesion} />
        <Route exact path="/perfil" component={Perfil} />
        <Route exact path="/registrarse" component={Registrarse} />
        <Route exact path="/aviso" component={Avisos} />
        <Route exact path="/informacion" component={Informacion} />
        <Route exact path="/que es" component={Preguntas} />
        <Route exact path="/sintomas" component={Sintomas} />
        <Route exact path="/dudas" component={Msj} />
        <Route exact path="/desarrollo" component={Desarrollo} />
        <Route exact path="/juegos" component={Juegos} />
        <Route exact path="/encuestas" component={Encuestas} />
        <Route exact path="/calificanos" component={Calificacion} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
