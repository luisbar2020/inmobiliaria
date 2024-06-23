import axios from 'axios' 

const setData = async (url,datos) => {

    try {
        const respuesta = await axios.put(url, JSON.stringify(datos), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(datos);
        return respuesta.data.mensaje; 
        
    } catch (error) {
        console.error('Error al actualizar los datos:', error);
        throw error;
    }
    

}
export default setData;

