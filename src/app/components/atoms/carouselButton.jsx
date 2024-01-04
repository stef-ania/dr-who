import styled from 'styled-components';

const CarouselButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  aspect-ratio: 1;
  border: ${({ isActive }) => (isActive ? 'none' : '3px solid var(--secondary-color)')};
  background-color: ${({ isActive }) => (isActive ? 'var(--primary-color)' : 'transparent')};
  border-radius: 50%;
  cursor: pointer;
`;

export default CarouselButton;
