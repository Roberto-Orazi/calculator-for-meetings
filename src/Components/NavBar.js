import { Nav } from "react-bootstrap"
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'
import Inicio from "./Inicio"
import Repartir from "./Repartir"
import Contacto from "./Contacto"
const NavBar = () => {
    return(
<Router>
 <Nav className="navfullsize">
    <ul>
        <li>
        <Link to="/">Inicio</Link>
        <Link to="/repartir">RepartiTe</Link>
        <Link to="/contacto">Contacto</Link>
        </li>
    </ul>
 </Nav>
  <Routes>
                 <Route exact path='/' element={< Inicio />}></Route>
                 <Route exact path='/repartir' element={< Repartir />}></Route>
                 <Route exact path='/contacto' element={< Contacto />}></Route>
          </Routes>
 </Router>   
    )
}

export default NavBar;