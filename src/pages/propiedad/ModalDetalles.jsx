import React from 'react';
import Modal from 'react-modal';

const DetallesModal = ({ isOpen, onRequestClose, datosModal }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Detalles de la Propiedad"
            className="Modal"
            overlayClassName="Overlay"
        >
            {datosModal && (
                    <div>
                        <h2>Detalles de la Propiedad</h2>
                        <p>Domicilio: {datosModal.domicilio}</p>
                        <p>Fecha Inicio Disponibilidad: {datosModal.fecha_inicio_disponibilidad}</p>
                        <p>Cantidad de Huéspedes: {datosModal.cantidad_huespedes}</p>
                        <p>Descripción: {datosModal.descripcion}</p>
                        <img src={datosModal.imagen} alt="Imagen de la propiedad" />
                        <button onClick={onRequestClose}>Cerrar</button>
                    </div>
                )}
        </Modal>
    )

}
export default DetallesModal;