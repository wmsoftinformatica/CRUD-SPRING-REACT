import api from "./api";

export const getClientes = async () => {
    const resposta = await api.get('/cliente');
    console.log("Listar Clientes", resposta.data);
    return resposta.data
}

export const postCliente = async (data)=> {

    const response = await api.post('/cliente',data,{
        headers: {
        'Content-Type': 'application/json'
        }
    });

    return response;
}

export const putCliente = async (data)=> {
    const response = await api.put('/cliente',data,{
        headers: {
        'Content-Type': 'application/json'
        }
    });

    return response;
}

export const deleteCliente = async (id)=> {
    const response = await api.delete(`/cliente/${id}`);
    
    return response
}