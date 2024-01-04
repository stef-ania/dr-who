import styled from 'styled-components';

const Button = styled.a`
  background: var(--primary-color);
  color: var(--tertiary-color);
  font-weight: var(--font-bold);
  border-radius: var(--border-radius);
  font-family: var(--font-heading-and-buttons);
  line-height: normal;
  margin: 0;
  font-size: ${(props) => (props.$medium ? '1.6rem' : '2rem')};
  padding: ${(props) => (props.$medium ? '1rem 4.5rem' : '1rem 3rem')};
  cursor: pointer;
  transition: all 300ms ease-in-out;
  border: none;

  &:hover {
    text-decoration: underline;
    transition: all 300ms ease-in-out;
  }

  @media (min-width: 1120px) {
    padding: ${(props) => (props.$medium ? '1rem 2.5rem' : '1.4375rem 4.54319rem 1.4375rem 4.20031rem')};
  }
`;

export default Button;
