import React, { useState, useEffect }  from 'react';
import Modal from 'react-modal';
import setData from '../../utils/setData' 


const EditPropiedad = ({ isOpen, onRequestClose, propiedad }) => {
          
    
    const [formData, setFormData] = useState({
            domicilio: '',
            localidad_id: '',
            cantidad_habitaciones: '',
            cantidad_banios: '',
            cochera:'',
            cantidad_dias:'',
            imagen:'',
            tipo_imagen:'',
            disponible: '',
            valor_noche: '',
            tipo_propiedad_id:'',
            fecha_inicio_disponibilidad: '',
            cantidad_huespedes: '',
            
    });
    
    useEffect(() => {
        if (propiedad) {
            
            setFormData({
                domicilio: propiedad.domicilio || '',
                localidad_id: propiedad.localidad_id || '',
                disponible: propiedad.disponible || '',
                valor_noche: propiedad.valor_noche || '',
                tipo_propiedad_id: propiedad.tipo_propiedad_id || '',
                fecha_inicio_disponibilidad: propiedad.fecha_inicio_disponibilidad,
                cantidad_huespedes: propiedad.cantidad_huespedes || '',
                cantidad_habitaciones: propiedad.cantidad_habitaciones || '',
                cantidad_banios: propiedad.cantidad_banios || '',
                cochera: propiedad.cochera || '',
                cantidad_dias: propiedad.cantidad_dias || '',
                imagen: propiedad.imagen || '',
                tipo_imagen: propiedad.tipo_imagen || '',
            });
        }
    }, [propiedad]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value 
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url= `http://localhost/propiedad/${propiedad.id}` ;
        const response= await setData(url,formData);
        console.log(response);
        const mensaje = response.data?.mensaje || 'Operación exitosa';
         alert(`Respuesta del servidor: ${mensaje}`);
        onRequestClose();
        window.location.reload();
    }


  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Editar Propiedad"
        className="Modal"
        overlayClassName="Overlay"
    >
         <h2>Editar Propiedad</h2>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Domicilio:</label>
                <input
                    type="text"
                    name="domicilio"
                    value={formData.domicilio}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>ID Localidad:</label>
                <input
                    type="text"
                    name="localidad_id"
                    value={formData.localidad_id}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Cantidad de Habitaciones:</label>
                <input
                    type="text"
                    name="cantidad_habitaciones"
                    value={formData.cantidad_habitaciones}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Cantidad de Baños:</label>
                <input
                    type="text"
                    name="cantidad_banios"
                    value={formData.cantidad_banios}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Cochera:</label>
                <input
                    type="text"
                    name="cochera"
                    value={formData.cochera}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Cantidad de Días:</label>
                <input
                    type="text"
                    name="cantidad_dias"
                    value={formData.cantidad_dias}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Imagen:</label>
                <input
                    type="text"
                    name="imagen"
                    value={formData.imagen}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Tipo de Imagen:</label>
                <input
                    type="text"
                    name="tipo_imagen"
                    value={formData.tipo_imagen}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Disponible:</label>
                <input
                    type="text"
                    name="disponible"
                    value={formData.disponible}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Valor Noche:</label>
                <input
                    type="text"
                    name="valor_noche"
                    value={formData.valor_noche}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>ID Tipo Propiedad:</label>
                <input
                    type="text"
                    name="tipo_propiedad_id"
                    value={formData.tipo_propiedad_id}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Cantidad de Huéspedes:</label>
                <input
                    type="text"
                    name="cantidad_huespedes"
                    value={formData.cantidad_huespedes}
                    onChange={handleChange}
                />
            </div>
                <button type="submit">Guardar</button>
                <button type="button" onClick={onRequestClose}>Cancelar</button>
        </form>
    </Modal>
  );
};



export default EditPropiedad