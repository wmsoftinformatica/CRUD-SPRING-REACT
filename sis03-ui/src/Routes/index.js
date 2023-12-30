import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Usuario from '../Page/Usuario';
import Cliente from '../Page/Cliente';
import Produto from '../Page/Produto';

export default function Router(){
    return (
        <div>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Usuario />} />
              <Route path="cliente" element={<Cliente />} />
              <Route path="produto" element={<Produto />} />
    
              {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </div>
      );
}

function Layout() {
    return (
      <>
        <Navbar/>
        <Outlet />
      </>
    );
  }
    
  function NoMatch() {
    return (
      <div>
        <h2>Nada pra você ver aqui!</h2>
        <p>
          <Link to="/">ir para a pagina inicial teste</Link>
        </p>
      </div>
    );
  }