import { Switch,Route} from 'react-router-dom'
import './App.css';
import Ciudad from './components/Ciudad'
import Ciudades from './components/Ciudades'
import Header from './components/Header'
import Footer from './components/Footer'
/* APP CLIMA*/



const App = () => (
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/"><Ciudades/></Route>
            <Route exact path="/ciudad/:id"><Ciudad/></Route>
          </Switch>  
          <Footer />     
        </div>
      );

export default App;
