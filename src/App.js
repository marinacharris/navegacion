import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navegacion from './componentes/Navegacion'
import Pagina1 from './componentes/Pagina1'
import Pagina2 from './componentes/Pagina2'
import Principal from './componentes/Principal'


function App() {
  return (
    <Router>
      <Navegacion/>
      <Route path='/pag1' component= {Pagina1}/>
      <Route path= '/pag2' component= {Pagina2}/>
      <Route path='/' exact component = {Principal}/>

    </Router>
  );
}

export default App;
