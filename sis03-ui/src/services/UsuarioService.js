import api from "./api";

export const getUsuarios = async ()=> {
    const resposta = await api.get('/usuario');
    console.log("Listar Usuarios", resposta.data);
    return resposta.data;
}

export const putUsuario = async (data)=> {
    const response = await api.put('/usuario',data, {
        headers: {
            'Content-Type':'application/json'
        }
    });
    return response;
}
export const postUsuario = async(data) => {

    const response = await api.post('/usurio',data,{
        headers:{
            'Content-Type':'application/json'        }
    });
    return response;
}
export const deleteUsuario = async (id) => {
    const response = await api.delete(`/usuario/${id}`);
        
    return response;
}