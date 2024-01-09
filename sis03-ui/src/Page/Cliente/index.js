
import { useEffect, useState } from "react";
import { getClientes } from "../../services/ClienteService";

const Cliente = ()=>{

  const [clientes, setClientes] = useState([]);

   const listarCliente = async () => {
      const resposta = await getClientes();
      setClientes(resposta);
   }

   useEffect(()=>{
    listarCliente();
   },[])

    return(
        <>
          <h1>CLENTE</h1>
          <table>
            <thead>
              <tr>
                <th>codigo</th>
                <th>nome</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((item)=> {
                return(
                  <tr key={item.codigo}>
                    <td>{item.codigo}</td>
                    <td>{item.nome}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </>
    )
}
export default Cliente;