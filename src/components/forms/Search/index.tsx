import { FC, useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Search as SearchBts } from "react-bootstrap-icons";
import { search } from "../../../types";

type Props = {
  onSearch : (params: search) => void
}

const Search: FC<Props> = ({onSearch}) => {

  const [fields, setFields] = useState({title: ""})

  useEffect(() => {
    onSearch(fields)
  },[fields])

  return (
    <Form>
      <InputGroup className="mb-3 p-5">
        <InputGroup.Text id="basic-addon1"><SearchBts/></InputGroup.Text>
        <Form.Control
          placeholder="Buscar peliculas"
          aria-label="Buscar peliculas"
          aria-describedby="Buscar-peliculas"
          onChange={e=> setFields(prevState => ({...prevState, title: e.target.value}))}
        />
      </InputGroup>
    </Form>
  );
};

export { Search };
