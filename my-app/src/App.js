import logo from './logo.svg';
import './App.css';
import AboutMe from './pages/AboutMe/AboutMe';
import Home from './pages/Home/Home';
import Navbar from './Navbar/Navbar';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <main>
      <Navbar/>
      <Routes>
          <Route element={<Home />} path={'/'}></Route>
          <Route element={<AboutMe />} path={'/AboutMe'}></Route>
      </Routes>
      </main>
    </div>
  </Router>
  );
}

export default App;
