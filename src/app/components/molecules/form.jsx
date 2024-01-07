import styled from 'styled-components';
import Input from '../atoms/input';
import Textarea from '../atoms/textarea';
import React, { useState } from 'react';

const FormContainer = styled.form`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: flex-start;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: hsl(141 60% 36% / 1);
  padding: 4rem 2rem;
  border-radius: 1.5rem;
  width: calc(100vw - 4rem);

  button {
    margin-top: 2rem;
    background-color: rgb(4 5 33 / 70%);
    color: var(--secondary-color);
    font-weight: var(--font-bold);
    border-radius: var(--border-radius);
    font-family: var(--font-heading-and-buttons);
    line-height: normal;
    font-size: 1rem;
    padding: 1rem 4.5rem;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    border: none;
    width: auto;
    text-align: center;
  }

  @media screen and (min-width: 1120px) {
    width: auto;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Form = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Obtener los valores de los campos
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // Mostrar la información en la consola
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Mensaje:', message);

    // Mostrar una alerta personalizada
    setShowModal(true);

    // Puedes hacer más cosas aquí, como enviar datos al servidor, etc.
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <Input type="text" name="name" id="name" placeholder="Nombre *" pattern="[A-Za-z ]+" required />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email *"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          required
        />
        <Textarea name="message" id="message" placeholder="Mensaje *" maxLength="300" required />
        <Input type="submit" value="Enviar" />
      </FormContainer>

      {showModal && (
        <ModalOverlay>
          <ModalContainer>
            <p>Su mensaje ha sido enviado correctamente.</p>
            <button onClick={closeModal}>Cerrar</button>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
};

export default Form;
