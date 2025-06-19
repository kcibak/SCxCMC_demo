import React from 'react';
import styled from 'styled-components';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
}

export const CardContainer = styled.div`
  perspective: 1000px;
  width: 100%;
  max-width: 650px;
  aspect-ratio: 1 / 1;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div<{ flipped: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  aspect-ratio: 1 / 1;
  position: relative;
  transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
  transform-style: preserve-3d;
  box-shadow: 0 4px 32px rgba(61, 79, 92, 0.18);
  background: #2B4159;
  cursor: default;
  transform: ${({ flipped }) => (flipped ? 'rotateY(180deg)' : 'none')};
  overflow: visible;
`;

const CardFace = styled.div<{ back?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 2.2rem;
  font-weight: 800;
  color: #fff;
  background: #2B4159;
  text-align: center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  z-index: 1;
  box-sizing: border-box;
  word-break: break-word;
  overflow: hidden;
  ${({ back }) => back && `
    background: #2B4159;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    transform: rotateY(180deg);
    z-index: 2;
    padding: 0 2.5rem;
  `}
`;

export const FlipCard: React.FC<FlipCardProps> = ({ front, back }) => {
  const [flipped, setFlipped] = React.useState(false);
  return (
    <CardContainer onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}>
      <Card flipped={flipped}>
        <CardFace>{front}</CardFace>
        <CardFace back>{back}</CardFace>
      </Card>
    </CardContainer>
  );
};
