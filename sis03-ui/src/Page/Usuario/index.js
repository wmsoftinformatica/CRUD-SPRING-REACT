import { useEffect, useState } from "react";
import { getUsuarios, putUsuario, postUsuario, deleteUsuario } from "../../services/UsuarioService";
import { useForm } from "react-hook-form";

const Usuario = ()=> {
    const [usuarios, setUsuarios] = useState([]);

    const onSubmit = async(data) => {
        let response;
        data.codigo ? response = await putUsuario(data):response = await postUsuario(data);

        if(response){
            atualizar();
            alert("ATUALIZADO COM SUCESSO");
        }else{
            alert("ERRO AO ATUALIZAR USUARIO");
        }
    }

    const listarUsuario = async ()=> {
        const resposta = await getUsuarios();
        setUsuarios(resposta);
    }

    useEffect(()=>{

        listarUsuario();

    },[])

    const {
        register,
        handleSubmit,
        reset,
        getValues,
        setValue,
        formState:{errors}
    } = useForm({
        defaultValues:{
            codigo:"",
            nome:""
        }
    });
    function atualizar(){
        reset();
        listarUsuario();
    }

    const onDelete = async (id) => {

        console.log("IIIIIIIIDDDDDDD",id);

        const response = await deleteUsuario(id);
        if(response);
        listarUsuario();
    }

    const onEdit = async (usuario) => {
        setValue("codigo",usuario.codigo);
        setValue("nome",usuario.nome);
    }

    return(
        <div style={{display:"block"}}>
                <div style={{display:"flex",  border:"3px solid#111", marginRight:"10px", marginLeft:"10px", marginTop:"10px", backgroundColor:"", justifyContent:"center"}}>
                    
                
                    <div style={{marginRight:"10px", marginLeft:"10px", marginTop:"10px",  marginBottom:"10px", backgroundColor:""}}>
                    <h1>Usuario</h1>
                        <table border={1}>
                            <thead>
                                <tr>
                                    <th>codigo</th>
                                    <th>nome</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>

                                {usuarios.map((item)=> {
                                    
                                    return (

                                        <tr key={item.codigo}>
                                            <td>{item.codigo}</td>
                                            <td>{item.nome}</td>
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
                
                </div> 
               <div style={{display:"flex", border:"3px solid#111", padding:"20px", margin:"10px", justifyContent:"center"}}>

                 <form onSubmit={handleSubmit(onSubmit)}>
                    
                     <input name="codigo" ref={register()} defaultValue="" readOnly  hidden/>
                     <label style={{marginLeft:"10px", marginRight:"10px"}}>nome:</label>
                     <input name="nome" ref={register({ required: true})} defaultValue="" />
                     {errors.nome && <p>campo obrigatorio</p>}
                     <button style={{margin:"10px"}}>enviar</button>
                 </form>
               </div>  
        </div>
        
    )
  
}

export default Usuario;