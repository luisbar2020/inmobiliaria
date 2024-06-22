import React from 'react';
import Modal from 'react-modal';

const DetailPropiedad = ({ isOpen, onRequestClose, datosModalDetalle }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Detalles de la Propiedad"
            className="Modal"
            overlayClassName="Overlay"
        >
            {datosModalDetalle && (
                    <div>
                        <h2>Detalles de la Propiedad</h2>
                        <p>Domicilio: {datosModalDetalle.domicilio}</p>
                        <p>Fecha Inicio Disponibilidad: {datosModalDetalle.fecha_inicio_disponibilidad}</p>
                        <p>Cantidad de Huéspedes: {datosModalDetalle.cantidad_huespedes}</p>
                        <img src={datosModalDetalle.imagen} alt="Imagen de la propiedad" />
                        <button onClick={onRequestClose}>Cerrar</button>
                    </div>
                )}
        </Modal>
    )

}
export default DetailPropiedad;