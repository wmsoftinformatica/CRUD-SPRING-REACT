
import { useEffect, useState } from "react";
import { getClientes, postCliente } from "../../services/ClienteService";

import { useForm } from "react-hook-form";

const Cliente = ()=>{

  const [clientes, setClientes] = useState([]);

   const listarCliente = async () => {
      const resposta = await getClientes();
      setClientes(resposta);
   }

   useEffect(()=>{
    listarCliente();
   },[])

   const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      nome: ""
    }
  });

  const onSubmit = async (data) => {
    await postCliente(data);
  }

    return(
      <div style={{display:"flex", border:"3px solid#111", marginRight:"10px", marginLeft:"10px", marginTop:"10px", justifyContent:"center"}}>
         <div style={{marginRight:"10px", marginLeft:"10px", marginTop:"10px", marginBottom:"10px",}}>
            <h1>CLENTE</h1>
              <table border={1}>
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
         
              <form
                onSubmit={handleSubmit(onSubmit)}
              >
                <label>Nome</label>
                <input name="nome" ref={register({ required: true})} defaultValue="" />
                {errors.nome && <p>campo obrigatorio</p>}
                <input type="submit" />
              </form>
          </div>
      </div>
    )
}
export default Cliente;