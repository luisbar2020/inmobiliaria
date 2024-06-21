import React, {useEffect,useState} from 'react'
import {getData} from '../../utils/getData';
import '../../index.css';
import Footer from '../../components/Footer';
import FormCriterios from './FormCriterios';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal'; 
import ModalDetalles from './ModalDetalles'

const PropiedadPage = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [datosModal, setDatosModal] = useState(null);
    const [datos, setDatos]= useState([]);  
    useEffect(()=> {
        getData("http://localhost/propiedad", setDatos);
    },[]);

    const handleFilterSubmit = (data) => {
        console.log(data);
        const filteredData = {};
        for (const key in data) {
            if (data[key] !== '' && data[key] !== null && data[key] !== undefined) {
                // Convertir el valor booleano true a 1
                if (key === 'disponible' && data[key] === true) {
                    filteredData[key] = 1;
                } else {
                    filteredData[key] = data[key];
                }
            }
            
        }
        if (filteredData.fecha_inicio_disponibilidad) {
            filteredData.fecha_inicio_disponibilidad = new Date(filteredData.fecha_inicio_disponibilidad).toISOString();
        }
        const queryString = new URLSearchParams(filteredData).toString();
        getData(`http://localhost/propiedad?${queryString}`, setDatos);
    };
        const openModal = (datos) => {
            setDatosModal(datos);
            setModalIsOpen(true);
        };

        const closeModal = () => {
            setModalIsOpen(false);
            setDatosModal(null);
        };
    return (

        <div  className='divPropiedad'>
            <div><FormCriterios onSubmit={handleFilterSubmit} /></div>
            {Array.isArray(datos) && datos.length > 0 ? (
                datos.map(datos=>
                    (
                        <div className='cardPropiedad' key={datos.id} >
                            <p>Domicilio: {datos.domicilio}  </p>
                            <p>Fecha Inicio Disponibilidad: {datos.fecha_inicio_disponibilidad}</p>
                            <p>Cantidad de Huespuedes:  {datos.cantidad_huespedes} </p>
                            <img src='' alt='logo'/>
                            <button onClick={() => openModal(datos)}>Detalles</button>  
                            <button>Editar</button>
                            <button>Eliminar</button> 
                        </div>
                    )
                )
            ) : ('No hay datos para mostrar')}
            <ModalDetalles
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                datosModal={datosModal}
            />
            
        </div>
        
    );
}

export default PropiedadPage;