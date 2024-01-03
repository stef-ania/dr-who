import styled, { keyframes } from 'styled-components';

const activateAnimation = keyframes`
  0%,
  100% {
    background: var(--primary-color);
    opacity: 1;
  }
`;

const CarouselButton = styled.a`
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  aspect-ratio: 1;
  border: 3px solid var(--secondary-color);
  background: transparent;
  border-radius: 50%;
  cursor: pointer;

  animation: ${activateAnimation} linear var(--carousel) calc((var(--i) - 1) * 25%) calc(var(--i) * 25% + 1px);
`;

export default CarouselButton;
