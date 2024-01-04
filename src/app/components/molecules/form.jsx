import styled from 'styled-components';
import Input from '../atoms/input';
import Textarea from '../atoms/textarea';

const FormContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: flex-start;
`;

const Form = () => {
  return (
    <FormContainer>
      <Input type="text" name="name" id="name" placeholder="Nombre *" required />
      <Input type="text" name="email" id="email" placeholder="Email *" required />
      <Textarea name="message" id="message" placeholder="Mensaje *" maxLength="300" />
      <Input type="submit" value="Enviar" />
    </FormContainer>
  );
};

export default Form;
