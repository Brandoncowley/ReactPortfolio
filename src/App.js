
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/Portfolio"><Portfolio /></Route>
            <Route path="/Contact"><Contact /></Route>
            <Route path="/Resume"><Resume /></Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;