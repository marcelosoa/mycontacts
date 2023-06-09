import PropTypes from 'prop-types';
import { Form } from './styles';

import FormGroup from '../FormGroup/index';
import Input from '../Input';
import Select from '../Select';
import Buttom from '../Button';

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder='nome' />
      </FormGroup>
      <FormGroup>
        <Input placeholder='email' />
      </FormGroup>
      <FormGroup>
        <Input placeholder='telefone' />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
        </Select>
      </FormGroup>

      <Buttom type='submit'>
        {buttonLabel}
      </Buttom>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
