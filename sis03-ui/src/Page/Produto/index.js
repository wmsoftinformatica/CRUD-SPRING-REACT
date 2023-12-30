
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
        <>
          <div style={{display:"flex",  border:"3px solid#111", marginRight:"10px", marginLeft:"10px", marginTop:"10px", backgroundColor:""}}>
           
               {/* <h1>PRODUTO </h1> */}
              
                  <table border="1">
                    <thead>
                      <tr>
                        <th>codigo</th>
                        <th>nome</th>
                      </tr>
                      
                    </thead>
                    <tbody>
                      {produtos.map( (item)=> {
                        return (
                        <tr>
                        <td>{item.codigo}</td>
                        <td>{item.descricao}</td>
                        </tr>
                        )
                      }                     
                      )
                      }
                    </tbody>

                  </table>
              
            
            
          </div>
        </>
       
    )
}

export default Produto;