import { useEffect, useState } from "react";
import { getUsuarios } from "../../services/UsuarioService";

const Usuario = ()=> {
    const [usuarios, setUsuarios] = useState([]);

    const listarUsuario = async ()=> {
        const resposta = await getUsuarios();
        setUsuarios(resposta);
    }

    useEffect(()=>{

        listarUsuario();

    },[])

    return(
        <div style={{display:"flex",  border:"3px solid#111", marginRight:"10px", marginLeft:"10px", marginTop:"10px", backgroundColor:"", justifyContent:"center"}}>
           
            <div style={{marginRight:"10px", marginLeft:"10px", marginTop:"10px",  marginBottom:"10px", backgroundColor:""}}>
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
           
        </div>
        
    )
  
}

export default Usuario;