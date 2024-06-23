import React, {useEffect,useState} from 'react'
import {getData} from '../../utils/getData';
import '../../assets/styles/propiedadStyles.css'
import FormCriterios from './FormCriterios';
import Modal from 'react-modal'; 
import DetailPropiedad from './DetailPropiedad';
import EditPropiedad from './EditPropiedad';
import deleteData from '../../utils/deleteData';
import {Link} from 'react-router-dom';
import HeaderComponent from '../../components/HeaderComponent';
import { openModalDetalles, closeModalDetalles, openModalEditar, closeModalEditar } from '../../utils/modales';

Modal.setAppElement('#root');

const PropiedadPage = () => {

    // MODAL PARA DETALLES

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [datosModalDetalle, setDatosModalDetalle] = useState(null);

    //  MODAL PARA EDITAR
    const [propiedadEditando, setPropiedadEditando] = useState(null);
    const [modalEditando, setModalEditando] = useState(false);

    // ACA SETEO DATOS como arrray VACIO para obtener las propiedades 
    const [datos, setDatos]= useState([]);  
    const [localidades, setLocalidades] = useState([]);
    const [tipoPropiedades, setTipoPropiedades] = useState([]);
    useEffect(()=> {
        getData("http://localhost/propiedad", setDatos);
        getData("http://localhost/localidades", setLocalidades);
        getData("http://localhost/tipos_propiedad", setTipoPropiedades);
    },[]);

    // ACA se llama a la funcion que tiene el formulario para filtar los datos;
    const handleFilterSubmit = (data) => {
        
        const filteredData = {};
        // recolecto los criterios
        for (const key in data) {
            if (data[key] !== '' && data[key] !== null && data[key] !== undefined) {
               filteredData[key] = data[key];
            }    
        }
        if (filteredData.fecha_inicio_disponibilidad) {
            filteredData.fecha_inicio_disponibilidad = new Date(filteredData.fecha_inicio_disponibilidad).toISOString();
        }
        const queryString = new URLSearchParams(filteredData).toString();
        // obtengo las propiedades con los filtros
        getData(`http://localhost/propiedad?${queryString}`, setDatos);
        
    };

        // FUNCION PARA ELIMINAR PROPIEDAD
        const handleDelete = async (id) => {
            const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar esta propiedad?');
            if (confirmDelete) {
                const url = `http://localhost/propiedad/${id}`;
                try {
                    const response = await deleteData(url);
                    console.log('Respuesta del servidor:', response);
                    const mensaje = response.data?.mensaje || 'Propiedad eliminada exitosamente';
                    alert(`Respuesta del servidor: ${mensaje}`);
                    setDatos(prevDatos => prevDatos.filter(propiedad => propiedad.id !== id));
                } catch (error) {
                    console.error('Error al eliminar la propiedad:', error);
                    const mensajeError = error.response?.data?.mensaje || 'Error al eliminar la propiedad';
                    alert(`Error al eliminar la propiedad: ${mensajeError}`);
                }
            }
        };
    return (
         
        <div  className='divPropiedad'>
            <HeaderComponent/>
           {/* INSERTO EL FORMULARIO Y ENVIO LOS DATOS A LA FUNCION  */}
            <div><FormCriterios onSubmit={handleFilterSubmit} /></div>
            {Array.isArray(datos) && datos.length > 0 ? (
                datos.map(datos=>
                    ( 
                     <div className='contenedorPage' key={datos.id}>  
                       
                        <div className='imgCont'> <img src='' alt='imagen de la propiedad'/>
                        </div>
                        <div className='datos'>
                            <p>Disponible : {datos.disponible}</p>
                            <p>Localidad: {datos.localidad_id}</p>
                            <p>Domicilio: {datos.domicilio}  </p>
                            <p>Tipo de Proiedad: {datos.tipo_propiedad_id}</p>
                            <p>Fecha Inicio Disponibilidad: {datos.fecha_inicio_disponibilidad}</p>
                            <p>Cantidad de Huespuedes:  {datos.cantidad_huespedes} </p>
                            <p>Valor noche: {datos.valor_noche}</p>
                        </div>
                        <div className='botones'>
                            <button onClick={() => openModalDetalles(datos, setDatosModalDetalle, setModalIsOpen)}>Detalles</button>
                            <button onClick={() => openModalEditar(datos, setPropiedadEditando, setModalEditando)}>Editar</button>
                            <button onClick={() => handleDelete(datos.id)}>Eliminar</button>
                        </div> 
                            
                           
                </div>
                    
                    )
                )
            ) : <p className='noResults'>No hay datos para mostrar</p>}
            <Link to="/NewPropiedad">
                <button>Agregar Nueva Propiedad</button>
            </Link>
            <DetailPropiedad
                isOpen={modalIsOpen}
                onRequestClose={() => closeModalDetalles(setDatosModalDetalle, setModalIsOpen)}
                datosModalDetalle={datosModalDetalle}
            />
            <EditPropiedad
                    isOpen={modalEditando}
                    onRequestClose={() => closeModalEditar(setPropiedadEditando, setModalEditando)}
                    propiedad={propiedadEditando}
             />

        </div>
        
    );
}

export default PropiedadPage;