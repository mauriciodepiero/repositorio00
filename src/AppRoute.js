import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./page/Home";
import Expedientes from "./page/Expedientes";
import Tramites from "./page/Tramites";
import NuevoExpediente from './page/NuevoExpediente';
import Formulario from '../src/tramitesContent/Formulario.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Expedientes" element={<Expedientes />} />
        <Route path="/Tramites" element={<Tramites />} />
        <Route path="/NuevoExpediente" element={<NuevoExpediente />} />
        <Route path="/nuevoexpediente" exact component={NuevoExpediente} />
        <Route path="/nuevoexpediente/formulario" exact component={Formulario} />
      </Routes>
    </Router>
  );
}

export default App;
