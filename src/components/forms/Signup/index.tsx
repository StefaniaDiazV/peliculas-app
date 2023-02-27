import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { userServices } from "../../../services/users";
import { SignUpForm } from "../../../types";
import { useForm } from "react-hook-form";
import './style.scss'
import { useMe } from "../../../hooks";

const Signup = () => {

  const { register, handleSubmit } = useForm<SignUpForm>();
  const { signup } = useMe();

  const onSubmit = (data: SignUpForm) => {
   signup(data)
  };

  return (
    <Form className='signup-form bg-dark' onSubmit={handleSubmit(onSubmit)} >
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingresar nombre" {...register("name")} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ingresar apellido" {...register("lastname")} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresar email"  {...register("email")} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingresar contraseña"  {...register("password")} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Fecha de nacimiento</Form.Label>
        <Form.Control type="date" placeholder="Ingresar fecha de nacimiento" {...register("birthdate")} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
  );
};

export { Signup };
