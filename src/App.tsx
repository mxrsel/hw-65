import React from "react";
import {Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './containers/Home/Home';
const App: React.FC = () => {
  return (
    <header>
      <NavBar/>

      <div className="body">
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </header>
  )
};

export default App
