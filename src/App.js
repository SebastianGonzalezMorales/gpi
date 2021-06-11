import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import EntrarPage from "./pages/EntrarPage";
import PerfilPage from "./pages/PerfilPage";
import ConveniosPage from "./pages/ConveniosPage";
import AdminPage from "./pages/AdminPage";
import PagosPage from "./pages/PagosPage";
import PagoConveniosPage from "./pages/PagoConveniosPage";
import adminPage from "./pages/AdminPage";
import FormularioAfiliate from "./pages/FormularioAfiliate";
import Buscarconvenios from './pages/Buscarconvenios'


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/entrar" component={EntrarPage} exact />
        <Route path="/perfil" component={PerfilPage} exact />
        <Route path="/convenios" component={ConveniosPage} exact />
        <Route path="/admin" component={AdminPage} exact />
        <Route path="/pagos" component={PagosPage} exact />
        <Route path="/pagoConvenios" component={PagoConveniosPage} exact />
        <Route path="/admin" component={AdminPage} exact />
        <Route path="/formularioAfiliate" component={FormularioAfiliate} />
        <Route path='/buscarconvenios' component={Buscarconvenios} />
      </Switch>
    </Router>
  );
}

export default App;
