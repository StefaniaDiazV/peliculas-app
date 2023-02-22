import { Button, Form, InputGroup } from "react-bootstrap"

const Search = () => {
    <Form>
      <InputGroup className="mb-3 p-5">
        <Form.Control
          placeholder="Buscar peliculas"
          aria-label="Buscar peliculas"
          aria-describedby="Buscar-peliculas"
        />
        <Button type="submit" variant="success" id="button-addon2">
          Buscar
        </Button>
      </InputGroup>
    </Form>
}

export { Search }