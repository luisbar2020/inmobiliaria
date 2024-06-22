import React, {useEffect,useState} from 'react'
import {getData} from '../../utils/getData';
import '../../index.css';
import Footer from '../../components/Footer';
import FormCriterios from './FormCriterios';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal'; 
import DetailPropiedad from './DetailPropiedad';
import EditPropiedad from './EditPropiedad';
import deleteData from '../../utils/deleteData';
import {Link} from 'react-router-dom';


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

    useEffect(()=> {
        getData("http://localhost/propiedad", setDatos);
    },[]);

    // ACA se llama a la funcion que tiene el formulario para filtar los datos;
    const handleFilterSubmit = (data) => {
        console.log(data);
        const filteredData = {};
        // recolecto los criterios
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
        // obtengo las propiedades con los filtros
        getData(`http://localhost/propiedad?${queryString}`, setDatos);
    };
       // ABRO EL MODAL DETALLES y seteo los datos
        const openModalDetalles = (datos) => {
            setDatosModalDetalle(datos);
            setModalIsOpen(true);
        };
        // CIERRO EL MODAL Y SETEO A NULL LOS DATOS
        const closeModalDetalles = () => {
            setModalIsOpen(false);
            setDatosModalDetalle(null);
        };
        // ABRO EL MODAL PARA EDITAR Y PRECARGO EN EL FORM LOS DATOS ACTUALES 
        const openModalEditar = (datos) => {
            setPropiedadEditando(datos);
            setModalEditando(true); 
        };
        // CIERRO EL MODAL PARA EDITAR Y SETEO NULL 
        const closeModalEditar = () => {
            setModalEditando(false); 
            setPropiedadEditando(null);
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
           {/* INSERTO EL FORMULARIO Y ENVIO LOS DATOS A LA FUNCION  */}
            <div><FormCriterios onSubmit={handleFilterSubmit} /></div>
            {Array.isArray(datos) && datos.length > 0 ? (
                datos.map(datos=>
                    (
                        <div className='cardPropiedad' key={datos.id} >
                            <p>ID: {datos.id}</p>
                            <p>Localidad: {datos.localidad_id}</p>
                            <p>Domicilio: {datos.domicilio}  </p>
                            <p>Tipo de Proiedad: {datos.tipo_propiedad_id}</p>
                            <p>Fecha Inicio Disponibilidad: {datos.fecha_inicio_disponibilidad}</p>
                            <p>Cantidad de Huespuedes:  {datos.cantidad_huespedes} </p>
                            <p>Valor noche: {datos.valor_noche}</p>
                            <img src='' alt='logo'/>
                            <button onClick={()=>  openModalDetalles(datos)}>Detalles</button>  
                            <button onClick={() => openModalEditar(datos)}>Editar</button>
                            <button onClick={()=> handleDelete(datos.id)}> Eliminar</button> 
                        </div>
                    )
                )
            ) : ('No hay datos para mostrar')}
            <Link to="/NewPropiedad">
                <button>Agregar Nueva Propiedad</button>
            </Link>
            <DetailPropiedad
                isOpen={modalIsOpen}
                onRequestClose={closeModalDetalles}
                datosModalDetalle={datosModalDetalle}
            />
            <EditPropiedad
                    isOpen={modalEditando}
                    onRequestClose={closeModalEditar}
                    propiedad={propiedadEditando}
             />
            
            
            
        </div>
        
    );
}

export default PropiedadPage;