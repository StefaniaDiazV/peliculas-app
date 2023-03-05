import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import { useMe } from '../../../hooks';

const NavBar = () => {

  const { logout } = useMe()

    return (
        <Navbar variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className='fs-2' href="#home">🎞 Peliculas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="ms-auto">
            <NavLink className="nav-link" to="/" >Home</NavLink>
            <NavLink className="nav-link" to="/new-releases">Ultimos lanzamientos</NavLink>
            <NavLink className="nav-link" to="/top-movies">Populares</NavLink>
            <NavLink className="nav-link" to="/movies">Busqueda</NavLink>
            <NavLink className="nav-link" to="/login">Login</NavLink>
            <NavLink className="nav-link" to="/signup">Signup</NavLink>
            <Nav.Link className="nav-link" onClick={logout}>Cerrar sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export { NavBar }