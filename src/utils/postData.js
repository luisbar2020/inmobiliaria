import axios from 'axios' 

const postData = async (url,datos) => {
    console.log(datos);
    try {
        const respuesta = await axios.post(url, JSON.stringify(datos), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(respuesta.data);
        return respuesta.data; 
        
    } catch (error) {
        console.error('Error al actualizar los datos:', error);
        throw error;
    }
    

}
export default postData;