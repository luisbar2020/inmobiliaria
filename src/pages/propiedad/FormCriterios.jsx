import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getData } from '../../utils/getData'; 
const FormCriterios = () => {
    // Estado para almacenar las localidades obtenidas de la API
    const [localidades, setLocalidades] = useState([]);

    useEffect(() => {
        // Obtener las localidades al cargar el componente
        getData("http://localhost/localidades", setLocalidades);
    }, []);

    const {  handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Aquí se pueden realizar acciones con los datos del formulario
    };

    return (
        <div>
            <h3>FILTRAR</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                    
                    <input
                    type='number'
                    name="cantidadHuespedes"
                    placeholder='Ingrese número de huéspedes'

                    ></input>
                
                <label>
                    Disponible
                    <input
                        type='checkbox'
                        name='disponible'
                        
                    />
                </label>
                <label>
                    Fecha
                    <input
                        type='date'
                        name='fecha'
                       
                    />
                </label>
                <select>
                    <option value=''>Seleccionar Localidad</option>
                    {localidades.map(localidad => (
                        <option key={localidad.id} value={localidad.nombre}>{localidad.nombre}</option>
                    ))}
                </select>
                <button type='submit'>Buscar</button>
            </form>
        </div>
    );
};

export default FormCriterios;
