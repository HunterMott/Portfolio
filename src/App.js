import './App.css';
import { Switch, Route } from 'react-router-dom'
import Contact from './screens/Contact';
import Home from './screens/Home';

function App() {
  console.log("if you found this send me an email and let's work together! :)");
  return (
    <div className="App">
      <Switch>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
