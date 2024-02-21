
import { useEffect, useState } from "react";
import { deleteCliente, getClientes, postCliente, putCliente } from "../../services/ClienteService";

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
    reset,
    getValues,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      codigo:"",
      nome: "",
      endereco: "",
      bairro: "",
      uf: "",
      telefone: ""
    }
  });
function atualizar(){
  reset();
  listarCliente();
}
  const onSubmit = async (data) => {
   let response; 
    data.codigo ? response = await putCliente(data):response = await postCliente(data);

    if(response){
      atualizar();
      alert("ATUALIZADO COM SUCESSO");
    }else{
      alert("ERRO AO ATUALIZARS");
    }
    // if(isEdit){
    //   const response = await putCliente(data);
    //   if(response){
    //     reset()
    //     listarCliente();
    //     setIsEdit(false);
    //   }
    // }else{
    //   const response = await postCliente(data);
    //   if(response){
    //     reset()
    //     listarCliente();
    //   }
    // }
  }

  const onDelete = async (id) => {
    console.log(id);
    const response = await deleteCliente(id);
    if(response)
    listarCliente();
    
  }

  const onEdit = async (cliente) =>{
    console.log(cliente);
    
    setValue("codigo",cliente.codigo)
    setValue('nome',cliente.nome);
    setValue('endereco',cliente.endereco);
    setValue('bairro',cliente.bairro);
    setValue('uf', cliente.uf);
    setValue('telefone',cliente.telefone)
  }

    return(
      
      <div style={{display:"block", border:"3px solid#111", marginRight:"10px", marginLeft:"10px", marginTop:"10px", justifyContent:"center"}}>
        <div style={{display:"flex", justifyContent:"center"}}>
          <h1>CLENTE</h1> 
        </div>
        
         <div style={{ display:"flex", justifyContent:"center", marginRight:"10px", marginLeft:"10px", marginTop:"10px", marginBottom:"10px",}}>
           
              <table border={1}>
                <thead>
                  <tr>
                    <th>codigo</th>
                    <th>nome</th>
                    <th>Endereço</th>
                    <th>Bairro</th>
                    <th>UF</th>
                    <th>Telefone</th>
                    <th>Data Cadastro</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {clientes.map((item)=> {
                    return(
                      <tr key={item.codigo}>
                        <td>{item.codigo}</td>
                        <td>{item.nome}</td>
                        <td>{item.endereco}</td>
                        <td>{item.bairro}</td>
                        <td>{item.uf}</td>
                        <td>{item.telefone}</td>
                        <td>{item.data_cadastro}</td>
                        <td>
                          <button onClick={()=> onEdit(item)}>Editar</button>
                          <button onClick={()=> onDelete(item.codigo)}>Excluir</button>
                        </td>

                      </tr>
                    )
                  })}
                </tbody>
              </table>
         
             
          </div>
          <div style={{display:"block", justifyContent:"center", marginRight:"30px", marginLeft:"30px", marginTop:"30px", marginBottom:"30px"}}>
              <form
                onSubmit={handleSubmit(onSubmit)}
              >
               <div style={{display:"flex", justifyContent:"center"}}> 

                    <div style={{display:"block", height:"100px", width:"800px", border:"3px solid#111", padding:"10px"}}>

                          <div style={{display:"flex", justifyContent:"center"}}>

                              <input name="codigo" ref={register()} defaultValue="" readOnly  hidden/>

                              <label style={{marginLeft:"10px", marginRight:"10px"}}>Nome: </label>
                              <input name="nome" ref={register({ required: true})} defaultValue="" />
                              {errors.nome && <p>campo obrigatorio</p>}
                          
                              <label style={{marginLeft:"10px", marginRight:"10px"}}>Endereço: </label>
                              <input name="endereco" ref={register({required: true})}defaultValue=""/>
              
                              <label style={{marginLeft:"10px", marginRight:"10px"}}>Bairro: </label>
                              <input name="bairro" ref={register({required: false})} defaultValue=""/>

                          </div>
                          
                          
                          <div style={{display:"flex",  padding:"20px", justifyContent:"center"}}>
                              <label style={{marginLeft:"10px", marginRight:"10px"}}>UF: </label>
                              <input name="uf" ref={register({ required: false})} defaultValue=""/>

                              <label style={{marginLeft:"10px", marginRight:"10px"}}>Telefone: </label>
                              <input name="telefone" ref={register({required: false})} defaultValue=""/>

                              
                                
                          </div>
                         

                    </div>
                    <div style={{display:"flex", justifyContent:"center", padding:"10px"}}>
                                  
                                  <input type="submit" />
                    </div>
                    
             </div>
              </form>
          </div>
      </div>
      
    )
}
export default Cliente;