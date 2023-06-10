import PropTypes from "prop-types";
import { useState } from "react";
import { Form, ButtonContainer } from "./styles";

import FormGroup from "../FormGroup/index";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import isEmailValid from "../../utils/IsEmailValid";

// Lidando com Formulários em React com Controlled Components
// Uncontrolled components
export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState([]);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: "name", message: "Nome é obrigatório" },
      ]);
    } else {
      setErrors((prevState) => prevState.filter((error) => error.field !== "name"));
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      const errorAlreadyExists = errors.find(
        (error) => error.field === "email",
      );

      if (errorAlreadyExists) {
        return;
      }
      setErrors((prevState) => [
        ...prevState,
        { field: "email", message: "Email é obrigatório" },
      ]);
    } else {
      setErrors((prevState) => prevState.filter((error) => error.field !== "email"));
    }
  }

  function handleSubmit() {
    console.log({
      name,
      email,
      phone,
      category,
    });
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  console.log(getErrorMessageByFieldName('name'));
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input value={name} placeholder="nome" onChange={handleNameChange} error={getErrorMessageByFieldName('name')} />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input value={email} onChange={handleEmailChange} placeholder="email" error={getErrorMessageByFieldName('email')} />
      </FormGroup>
      <FormGroup>
        <Input
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="telefone"
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="reddit">Reddit</option>
          <option value="twitter">Twitter</option>
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
