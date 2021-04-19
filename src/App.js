import Navbar from './components/navbar';
import Home from './Home/home';
import About from './About/about';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="body-container">
        <Home />
        <About />
        {/* <Router>
            <Route path="/Home" component={Home} />
            <Route path="/About" component={About} />
        </Router> */}
      </div>
    </div>
  );
}

export default App;
