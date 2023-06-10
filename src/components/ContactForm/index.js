import PropTypes from "prop-types";
import { useState } from "react";
import { Form, ButtonContainer } from "./styles";

import FormGroup from "../FormGroup/index";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";

// Lidando com Formulários em React com Controlled Components
// Uncontrolled components
export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState("");
  return (
    <Form>
      <FormGroup>
        <Input
          value={name}
          placeholder="nome"
          onChange={(event) => setName(event.target.value)}
        />
      </FormGroup>
      <FormGroup error="O Formato do Email é inválido">
        <Input placeholder="email" error />
      </FormGroup>
      <FormGroup>
        <Input placeholder="telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer type="submit">
        <Button>{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
