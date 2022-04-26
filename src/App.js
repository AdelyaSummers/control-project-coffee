import React from "react";
// import { useState } from "react";
// import { data } from "./data";
// import Coffee from "./Coffee";
// import Buttons from "./Buttons";
import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";



function App() {
    

    return <Router>
            <nav>
            <Link to="/" className="link">Home</Link>
              <Link to="/about" className="link">About</Link>
              <Link to="/contacts" className="link">Contacts</Link>
            </nav>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/contacts" element={<Contacts/>}/>
              </Routes>
  
              </Router>

          
}



export default App;
