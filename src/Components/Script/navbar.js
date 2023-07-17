import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">About Me</Link>
    </li>
    <li>
      <Link to="/linkedin">Linkedin</Link>
    </li>
    <li>
      <Link to="/projects">Projects</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </div>
  );
}
export default navbar;