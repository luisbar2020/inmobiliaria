import React, {useEffect,useState} from 'react'
import {getData} from '../../utils/getData';
import '../../index.css';
import Footer from '../../components/Footer';
import FormCriterios from './FormCriterios';
const PropiedadPage = () => {
  const [datos, setDatos]= useState(null);
  useEffect(()=> {
     getData("http://localhost/propiedad", setDatos);
  },[]);
  return (

    <div  className='divPropiedad'>
        <div><FormCriterios/></div>
        {datos !== null ? (
            datos.map(datos=>
                (
                    <div className='cardPropiedad' key={datos.id} >
                        <p>Domicilio: {datos.domicilio}  </p>
                        <p>Fecha Inicio Disponibilidad: {datos.fecha_inicio_disponibilidad}</p>
                        <p>Cantidad de Huespuedes:  {datos.cantidad_huespedes} </p>
                        <img src='https://imgs.search.brave.com/M3ZXPR-weoHLqC7OHPMmbmtFThPS_cPtqdo7-bRwAS0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vMDNjM2Y4/OWItMDU0Yi00ODNh/LWJmYjgtNjAzODMw/N2VhNTIzL2xvZ28t/c2VhcmNoLWdyaWQt/MXg_bG9nb1RlbXBs/YXRlVmVyc2lvbj0x/JnY9NjM4Mjc3ODI3/MDI0NDcwMDAw' alt='logo'/>
                    </div>
                )
            )
        ) : ('No hay datos para mostrar')}
        
    </div>
     
   );
}

export default PropiedadPage;