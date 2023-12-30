import api from "./api";

    //Listar produtos===================================================n
    export  const getProdutos = async () => {
        const resposta = await api.get('/produto');
        console.log("Listar Produtos", resposta.data);
        return resposta.data
    }