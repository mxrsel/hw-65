import React from "react";
import {Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Contacts from './containers/Contacts/Contacts';
import Divisions from './containers/Divisions/Divisions';
import Admin from './containers/Admin/Admin';
const App: React.FC = () => {
  return (
    <header>
      <NavBar/>

      <div className="body">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/divisions" element={<Divisions/>}/>
          <Route path="/admin" element={<Admin />}/>
        </Routes>
      </div>
    </header>
  )
};

export default App
