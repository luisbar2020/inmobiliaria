import React,{useEffect,useState} from 'react'
import { useForm } from 'react-hook-form'
import {getData} from '../../utils/getData';
import '../../assets/styles/NewPropiedad.css'
import postData from '../../utils/postData';


const NewPropiedad = () => {
    const [localidades, setLocalidades] = useState([]);
    const [tipoPropiedades, setTipoPropiedades] = useState([]);
    useEffect(() => {
        // Obtener las localidades al cargar el componente
        getData("http://localhost/localidades", setLocalidades);
        getData("http://localhost/tipos_propiedad", setTipoPropiedades);
    }, []);


   const {register, handleSubmit} = useForm();

   const onSubmit = (data) => {
      const url = "http://localhost/propiedad";
      const respuesta = postData(url,data) 
      
      alert (respuesta);
   }
   



  return (
    <div className='formNewPropiedad'>
        <h1>AGREGAR NUEVA PROPIEDAD</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='contentLabel'> 
                <label>
                    Domicilio :
                    <input type="text"
                    name='domicilio'
                    {...register('domicilio')} />
                </label>
                <label>
                    Localidad :
                    <input type="number"
                    name='localidad_id'
                    {...register('localidad_id')} />
                    {/* <select name='localidad'
                    {...register('localidad')} key={localidades.id}>
                    <option value=''>Seleccionar Localidad</option>
                        {localidades.map(localidad => (
                            <option key={localidad.id} value={localidad.nombre}>{localidad.nombre}</option>
                        ))}
                    </select> */}
                </label>
                <label>
                    Cantidad de habitaciones :
                    <input type="number"
                    name='cantidad_habitaciones'
                    {...register('cantidad_habitaciones')} />
                </label>
                <label>
                    Cantidad de baños :
                    <input type="number"
                    name='cantidad_banios'
                    {...register('cantidad_banios')} />
                </label>
                <label>
                    Cochera :
                    <input type="number"
                    name='cochera'
                    {...register('cochera')} />
                </label>
                <label>
                    Cantidad de huespuedes :
                    <input type="number"
                    name='cantidad_huespedes'
                    {...register('cantidad_huespedes')} />
                </label>
                <label>
                    Fecha de inicio de disponibilidad :
                    <input type="text"
                    name='fecha_inicio_disponibilidad'
                    {...register('fecha_inicio_disponibilidad')} />
                </label>
                <label>
                    Cantidad de dias :
                    <input type="number"
                    name='cantidad_dias'
                    {...register('cantidad_dias')} />
                </label>
                <label>
                    Disponible :
                    <input type="number"
                    name='disponible'
                    {...register('disponible')} />
                </label>
                <label>
                    Valor por noche $:
                    <input type="number"
                    name='valor_noche'
                    {...register('valor_noche')} />
                </label>
                <label>
                    Tipo de propiedad :
                    <input type="number"
                    name='tipo_propiedad_id'
                    {...register('tipo_propiedad_id')} />
                    {/* <select name='tipo_propiedad'
                    {...register('tipo_propiedad')} key={tipoPropiedades.id}>
                    <option value=''>Selecionar tipo de propiedad</option>
                        {tipoPropiedades.map(tipoPropiedades => (
                            <option key={tipoPropiedades.id} value={tipoPropiedades.nombre}>{tipoPropiedades.nombre}</option>
                        ))}
                    </select> */}
                </label>
                <label>
                    Imagen :
                    <input type="text"
                    name='imagen'
                    {...register('imagen')} />
                </label>
                <label>
                    tipoImagen :
                    <input type="text"
                    name='tipo_imagen'
                    {...register('tipo_imagen')} />
                </label>
                <button type='submit'>Crear Propiedad</button>
            </div>
        </form>
        




    </div>
  )
}

export default NewPropiedad