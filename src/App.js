import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';
import { Switch } from 'react-router-dom';
import Services from './Page/Serveces_page';
import About from './Page/About';
import Team from './Page/Team_page';



function App() {
  return (
    <>
    <Router>
      <Navbar />
      
     <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path='/services' component={Services}/>
        <Route path='/about' component={About}/>
        <Route path='/Team' component={Team}/>
     </Switch> 
     
</Router>  
    

    </>
  );
}

export default App;
