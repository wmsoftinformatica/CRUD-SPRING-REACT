import api from "./api";

    //Listar produtos===================================================n
    export  const getProdutos = async () => {
        const resposta = await api.get('/products');
        console.log("Listar Produtos", resposta.data);
        return resposta.data
    }