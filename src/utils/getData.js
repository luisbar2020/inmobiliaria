import axios from 'axios' 

const getData = async (url,setDatos) => {

    const respuesta= await axios.get (url);
    setDatos(respuesta.data.datos);

}

export {
    getData
}