import Navbar from './components/navbar';
import Home from './Home';
import Projects from './Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="container">
      <Router>
        <Route path="/Home" component={Home} />
        <Route path="/Projects" component={Projects} />
      </Router>
      <Navbar />
    </div>
  );
}

export default App;
