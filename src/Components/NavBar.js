import { Nav } from "react-bootstrap"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Faq } from "./Faq"
import Repartir from "./Repartir"
import Contacto from "./Contacto"
const NavBar = () => {
    return (
        <Router>
            <Nav className="navfullsize">
                <ul>
                    <li>
                        <Link to="/faq">Faq</Link>
                        <Link to="/">RepartiTe</Link>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </Nav>
            <Routes>
                <Route exact path='/faq' element={< Faq />}></Route>
                <Route exact path='/' element={< Repartir />}></Route>
                <Route exact path='/contacto' element={< Contacto />}></Route>
            </Routes>
        </Router>
    )
}

export default NavBar;