import { Switch,Route} from 'react-router-dom'
import Ciudad from '../Ciudad'
import Ciudades from '../Ciudades'
import Header from '../Header'
import Footer from '../Footer'

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
