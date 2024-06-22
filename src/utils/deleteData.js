import axios from 'axios' 

const deleteData = async (url) => {

    const respuesta= await axios.delete (url);
    return {
        respuesta
    }

}

export default deleteData;