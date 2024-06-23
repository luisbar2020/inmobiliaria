import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PropiedadPage from './pages/propiedad/PropiedadPage';
import NewPropiedad from './pages/propiedad/NewPropiedad';
import 'bootstrap/dist/css/bootstrap.min.css';


const App= () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PropiedadPage></PropiedadPage>} />
        <Route path='/NewPropiedad' element={<NewPropiedad></NewPropiedad>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


