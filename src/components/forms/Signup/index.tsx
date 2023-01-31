import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './style.scss'

const Signup = () => {
  return (
    <Form className='signup-form bg-dark' >
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingresar nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ingresar apellido" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresar email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingresar contraseña" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Fecha de nacimiento</Form.Label>
        <Form.Control type="date" placeholder="Ingresar fecha de nacimiento" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
  );
};

export { Signup };
