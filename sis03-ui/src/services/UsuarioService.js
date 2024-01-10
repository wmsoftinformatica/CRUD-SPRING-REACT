import api from "./api";

export const getUsuarios = async ()=> {
    const resposta = await api.get('/usuario');
    console.log("Listar Usuarios", resposta.data);
    return resposta.data;
}