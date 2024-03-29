
import { useEffect, useState } from "react";
import { getProdutos } from "../../services/ProdutoService";

const Produto = ()=>{
const [produtos, setProdutos] = useState([]);

const listarProduto = async ()=>{
  const resposta = await getProdutos();
     setProdutos(resposta);
}

  useEffect(()=>{
    listarProduto();
  },[])

    return(
        <div style={{display:"flex",  border:"3px solid#111", marginRight:"10px", marginLeft:"10px", marginTop:"10px", backgroundColor:"", justifyContent:"center"}}>
          <div style={{marginRight:"10px", marginLeft:"10px", marginTop:"10px", marginBottom:"10px", backgroundColor:""}}>
           
                <h1>PRODUTO </h1> 
              
                  <table border="1">
                    <thead>
                      <tr>
                        <th>codigo</th>
                        <th>nome</th>
                        <th>valor Unitario</th>
                        <th>data Cadastro</th>
                      </tr>
                      
                    </thead>
                    <tbody>
                      {produtos.map( (item)=> {
                        return (
                        <tr key={item.codigo}>
                          <td>{item.codigo}</td>
                          <td>{item.descricao}</td>
                          <td>{item.valor_unitario}</td>
                          <td>{item.data_cadastro}</td>
                        </tr>
                        )
                      }                     
                      )
                      }
                    </tbody>

                  </table>
              
            
            
          </div>
        </div>
       
    )
}

export default Produto;