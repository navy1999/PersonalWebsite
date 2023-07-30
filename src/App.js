import logo from './logo.svg';
import 'react-bootstrap'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Script/Navbar"
import About from "./Components/Script/about"
import Contact from "./Components/Script/contact"
import Projects from "./Components/Script/projects"
function App() {
  return (
   <div>
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/"  element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  </Router>
  </div> 
  );
}

export default App;
