import { useEffect,useState } from "react";
import { getProdutos } from "../../services/ProdutoService";
import { getUsuarios } from "../../services/UsuarioService";
import { getClientes } from "../../services/ClienteService";

const Todos = ()=> {
    
    const [produtos, setProdutos] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [clientes, setClientes] = useState([]);

    const listarProduto = async ()=> {
        const respostaProduto = await getProdutos();
        setProdutos(respostaProduto);
    }

    const listarUsuario = async ()=> {
        const respostaUsuario = await getUsuarios();
        setUsuarios(respostaUsuario);
    }

    const listarCliente = async ()=> {
        const respostaCliente = await getClientes();
        setClientes(respostaCliente);
    }

    useEffect(()=> {
      listarProduto();
      listarCliente();
      listarUsuario();
    },[])

   return (

    <div style={{display:"flex", border:"3px solid#111", marginRight:"10px", marginLeft:"10px", marginTop:"10px", justifyContent:"center"}}>
         
          
          <div style={{marginRight:"10px", marginLeft:"10px", marginTop:"10px", marginBottom:"10px", backgroundColor:"#6ccb9b"}}>

            <h1>Produto</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>codigo</th>
                        <th>nome</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((item)=> {
                        return (
                            <tr key={item.codigo}>
                                <td>{item.codigo}</td>
                                <td>{item.descricao}</td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>

          </div>

          <div style={{marginRight:"10px", marginLeft:"10px", marginTop:"10px", marginBottom:"10px", backgroundColor:"#cb6cad"}}>

            <h1>Usuario</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>codigo</th>
                        <th>nome</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((item)=> {
                        return (
                            <tr key={item.codigo}>
                                <td>{item.codigo}</td>
                                <td>{item.nome}</td>

                            </tr>
                        )
                    })}
                </tbody>

            </table>
          </div>

          <div style={{marginRight:"10px", marginLeft:"10px", marginTop:"10px", marginBottom:"10px", backgroundColor:"#6c8ecb"}}>
            <h1>Cliente</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>codigo</th>
                        <th>nome</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((item)=> {
                        return (
                            <tr key={item.codigo}>
                                <td>{item.codigo}</td>
                                <td>{item.nome}</td>

                            </tr>
                        )
                    })}
                </tbody>

            </table>
          </div>

          
         

    </div>

   

   )
}

export default Todos;