
import './App.css';
import Navbar from './components/header';
import Home from './views/Home';
import Portfolio from './views/Portfolio';
import Contact from './views/Contact';
import Resume from './views/Resume';
import Footer from './components/footer';
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