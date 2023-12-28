import "./index.css"
const Navbar = ()=> {
    return (
        <>
        <div style={{border:"10px solid#111", borderRadius:"0%"}}>
          <ul>
            <li><a href="#USUARIO">USUARIO</a></li>
            <li><a href="#CLIENTE">CLIENTE</a></li>
            <li><a href="PRODUTO">PRODUTO</a></li>
            <li style={{float:"right"}}><a className = "active" href="SOBRE">SOBRE</a></li>
          </ul>  
        </div>
          

        </>
        
        
    )
}

export default Navbar;