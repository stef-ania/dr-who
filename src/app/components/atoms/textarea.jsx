import styled from 'styled-components';

const Textarea = styled.textarea`
  border: 3px solid #fff;
  background-color: var(--tertiary-color);
  padding: 0.75rem 1.7rem;
  color: var(--secondary-color);
  font-size: var(--font-default-size);
  font-family: var(--font-heading-and-buttons);
  opacity: 1;
  width: 100%;
  min-height: 12.875rem;

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

  @media (min-width: 1120px) {
    padding: 0.75rem 2.85rem;
    max-width: 35.9375rem;
    min-height: 17.3125rem;
  }
`;

export default Textarea;
