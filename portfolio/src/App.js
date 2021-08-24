import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import ErrorPage from './Components/ErrorPage';
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route>
            <ErrorPage/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
