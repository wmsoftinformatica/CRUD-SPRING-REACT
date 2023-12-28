import "./index.css"
import { Link } from "react-router-dom";
const Navbar = ()=> {
    return (
        <>
        <div style={{border:"10px solid#111", borderRadius:"0%"}}>
          <ul>
            <li><Link to="/">USUARIO</Link></li>
            <li><Link to="/cliente">CLIENTE</Link></li>
            <li><Link to="/estoque">PRODUTO</Link></li>
            <li style={{float:"right"}}><a className = "active" href="SOBRE">SOBRE</a></li>
          </ul>  
        </div>
        </>      
    )
}
 
export default Navbar;