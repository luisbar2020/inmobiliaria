import axios from 'axios' 

const postData = async (url,datos) => {
    try {
        const respuesta = await axios.post(url, JSON.stringify(datos), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return ( respuesta.data.mensaje ) 
        
    } catch (error) {
        console.error('Error al actualizar los datos:', error);
        throw error;
    }
    

}
export default postData;