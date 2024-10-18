import logo from './logo.svg';
import './App.css';

import Navbar_ from './Navbar/Navbar_';
import "bootstrap/dist/css/bootstrap.min.css";
import AnimateRoutes from './components/AnimateRoutes';


import {
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';

function App() {

  return (
    <Router>
    <div>
      <Navbar_/>
      <main>
        <AnimateRoutes/>
      </main>
    </div>
  </Router>
  );
}

export default App;
