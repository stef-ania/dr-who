import styled from 'styled-components';

const Input = styled.input`
  border: 3px solid var(--secondary-color);
  background-color: var(--tertiary-color);
  padding: 0.75rem 1.7rem;
  color: var(--secondary-color);
  font-size: var(--font-default-size);
  font-family: var(--font-heading-and-buttons);
  opacity: 1;

  &:focus {
    outline-offset: -1px;
    border-radius: 4px;
  }

  ::placeholder {
    color: var(--secondary-color);
    -webkit-text-fill-color: var(--secondary-color);
    opacity: 1;
  }

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    ::placeholder {
      color: var(--secondary-color);
    }
  }

  &:hover {
    cursor: pointer;
  }

  &[type='submit'] {
    background: var(--primary-color);
    color: var(--tertiary-color);
    font-weight: var(--font-bold);
    border-radius: var(--border-radius);
    font-family: var(--font-heading-and-buttons);
    line-height: normal;
    margin: 0 1rem;
    //font-size: var(--font-default-size);
    padding: 0.75rem 6.8rem;
    transition: all 300ms ease-in-out;
    border: none;
    cursor: pointer;
  }

  &[type='submit']:hover {
    text-decoration: underline;
    transition: all 300ms ease-in-out;
  }

  @media (min-width: 1120px) {
    padding: 0.75rem 2.85rem;
  }
`;

export default Input;
