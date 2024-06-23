export const openModalDetalles = (datos, setDatosModalDetalle, setModalIsOpen) => {
    setDatosModalDetalle(datos);
    setModalIsOpen(true);
};

export const closeModalDetalles = (setDatosModalDetalle, setModalIsOpen) => {
    setModalIsOpen(false);
    setDatosModalDetalle(null);
};

export const openModalEditar = (datos, setPropiedadEditando, setModalEditando) => {
    setPropiedadEditando(datos);
    setModalEditando(true);
};

export const closeModalEditar = (setPropiedadEditando, setModalEditando) => {
    setModalEditando(false);
    setPropiedadEditando(null);
};
