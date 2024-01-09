import api from "./api";

export const getClientes = async () => {
    const resposta = await api.get('/cliente');
    console.log("Listar Clientes", resposta.data);
    return resposta.data
}