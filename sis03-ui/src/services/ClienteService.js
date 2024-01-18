import api from "./api";

export const getClientes = async () => {
    const resposta = await api.get('/cliente');
    console.log("Listar Clientes", resposta.data);
    return resposta.data
}

export const postCliente = async (data)=> {

    await api.post('/cliente',data,{
        headers: {
        'Content-Type': 'application/json'
        }
    });
}