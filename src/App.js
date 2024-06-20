import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TipoPropiedadPage from './pages/tipo_Propiedad/TipoPropiedadPage';
import NewTipoPropiedad from './pages/tipo_Propiedad/NewTipoPropiedad';
import PropiedadPage from './pages/propiedad/PropiedadPage';

const App= () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PropiedadPage></PropiedadPage>} />
        <Route path="/TiposPropiedades" element={<TipoPropiedadPage />} />
        <Route path='/NewTipoPropiedad' element={<NewTipoPropiedad></NewTipoPropiedad>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


