import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useMe } from "../../../hooks";
import { loginForm } from "../../../types";
import "./style.scss";

const Login = () => {
  const { register, handleSubmit } = useForm<loginForm>();

  const { login } = useMe();

  const onSubmit = (data: loginForm) => {
   login(data)
  };

  return (
    <Form className="login-form bg-dark" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresar email"  {...register("email")} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingresar contraseña" {...register("pass")} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
  );
};

export { Login };
