import React from 'react';
import styled from 'styled-components';
import type { Consultant } from '../../types';
import { Link } from 'react-router-dom';

export interface ConsultantCardProps {
  consultant: Consultant;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.7rem;
  width: 400px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(61, 79, 92, 0.10);
  transition: box-shadow 0.25s cubic-bezier(0.4,0,0.2,1), transform 0.25s cubic-bezier(0.4,0,0.2,1);
  cursor: pointer;
  &:hover {
    box-shadow: 0 8px 32px rgba(61, 79, 92, 0.18);
    transform: translateY(-10px) scale(1.03);
  }
`;

const Photo = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.2rem;
  transition: transform 0.25s cubic-bezier(0.4,0,0.2,1);
  ${Card}:hover & {
    transform: scale(1.07);
  }
`;

const Name = styled.h3`
  margin: 0.2rem 0 0.1rem 0;
  font-size: 2rem;
  color: #2B4159;
  font-weight: 700;
  text-align: center;
`;

const Title = styled.p`
  margin: 0 0 2.2rem 0;
  font-size: 1.05rem;
  color: #00A693;
  font-weight: 500;
  text-align: center;
`;

export const ConsultantCard: React.FC<ConsultantCardProps> = ({ consultant }) => (
  <Link to={`/consultants/${consultant.id}`} style={{ textDecoration: 'none' }}>
    <Card>
      <Photo src={consultant.photo} alt={consultant.name} />
      <Name>{consultant.name}</Name>
      <Title>{consultant.title}</Title>
    </Card>
  </Link>
);
