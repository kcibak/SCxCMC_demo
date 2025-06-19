import React from 'react';
import { FlipCard } from '../../components/flipcard/flipcard';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { consultants } from '../consultants/consultants';
import { CardContainer } from '../../components/flipcard/flipcard';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DescriptionList = styled.ul`
  text-align: left;
  margin: 0 auto;
  padding-left: 1.5em;
  font-size: 1.25rem;
  font-weight: 500;
  color: #fff;
  list-style: disc outside;
`;

const DescriptionItem = styled.li`
  margin-bottom: 0.7em;
  line-height: 1.5;
  word-break: break-word;
`;

const DescriptionGrid = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  align-items: flex-start;
`;

const HalfList = styled.ul`
  text-align: left;
  margin: 0;
  padding-left: 1.5em;
  font-size: 1.25rem;
  font-weight: 500;
  color: #fff;
  list-style: disc outside;
`;

const whySCXMC = [
  'A team of highly experienced pharmaceutical consultants',
  'Phase 1 -> Commercial',
  'End to end API and drug product development',
  'A CMC team ready to execute',
  'Solutions and Action Oriented',
  'Over a century’s worth of combined experience',
];

const simplifiedConsulting = [
  'CMC strategy',
  'Formulation Development',
  'Chemical Process Development',
  'Experts in working with CDMOs',
  'Chemistry and Analytical Chemistry',
  'Project Management',
  'Quality Assurance',
  'CDMO placement',
];

const IntroSection = styled.div`
  max-width: 900px;
  margin: 3.5rem auto 2.5rem auto;
  text-align: center;
`;

const IntroText = styled.p`
  font-size: 1.45rem;
  color: #2b4159;
  font-weight: 500;
  margin-bottom: 0.7rem;
  opacity: 0;
  transform: scale(0.95);
  animation: fadeGrowIn 1s cubic-bezier(0.4,0,0.2,1) 0.1s forwards;

  @keyframes fadeGrowIn {
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const CTACardContact = styled.div`
  perspective: 1000px;
  width: 100%;
  max-width: 650px;
  aspect-ratio: 1 / 1;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  font-weight: 800;
  color: #fff;
  text-align: center;
  cursor: pointer;
  background: #2B4159;
  border-radius: 16px;
  box-shadow: 0 4px 32px rgba(61, 79, 92, 0.18);
  transition: box-shadow 0.2s, background 0.2s, transform 0.2s;
  &:hover {
    box-shadow: 0 8px 32px rgba(61, 79, 92, 0.18);
    background: #1a2a3a;
    color: #fff;
    transform: translateY(-4px) scale(1.04);
  }
`;

const MiniConsultantsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 105px);
  grid-template-rows: repeat(3, 105px);
  gap: 1.3rem;
  justify-content: center;
  margin-top: 1.5rem;
`;

const MiniPhoto = styled.img`
  width: 105px;
  height: 105px;
  border-radius: 50%;
  object-fit: cover;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.18s, transform 0.18s;
  box-shadow: 0 1px 6px rgba(61, 79, 92, 0.10);
  &:hover {
    box-shadow: 0 4px 16px rgba(61, 79, 92, 0.18);
    transform: scale(1.08);
  }
`;

const FlipCardWithPhotos: React.FC<{ front: string; photos: any[]; onPhotoClick: (id: string) => void; onCardClick: () => void; }> = ({ front, photos, onPhotoClick, onCardClick }) => {
  return (
    <CardContainer
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
      onClick={() => {
        onCardClick();
        window.scrollTo({ top: 0, behavior: 'auto' });
      }}
      style={{ cursor: 'pointer' }}
    >
      <FlipCard
        front={front}
        back={
          <MiniConsultantsGrid>
            {/* Top row: offset by 1 column (columns 2 and 4) */}
            <div style={{ gridColumn: 2, gridRow: 1 }}>
              <MiniPhoto
                key={photos[0].id}
                src={photos[0].photo}
                alt={photos[0].name}
                title={photos[0].name}
                onClick={e => {
                  e.stopPropagation();
                  onPhotoClick(photos[0].id);
                }}
              />
            </div>
            <div style={{ gridColumn: 4, gridRow: 1 }}>
              <MiniPhoto
                key={photos[1].id}
                src={photos[1].photo}
                alt={photos[1].name}
                title={photos[1].name}
                onClick={e => {
                  e.stopPropagation();
                  onPhotoClick(photos[1].id);
                }}
              />
            </div>
            {/* Middle row: 3 items (columns 1, 3, 5) */}
            <div style={{ gridColumn: 1, gridRow: 2 }}>
              <MiniPhoto
                key={photos[2].id}
                src={photos[2].photo}
                alt={photos[2].name}
                title={photos[2].name}
                onClick={e => {
                  e.stopPropagation();
                  onPhotoClick(photos[2].id);
                }}
              />
            </div>
            <div style={{ gridColumn: 3, gridRow: 2 }}>
              <MiniPhoto
                key={photos[3].id}
                src={photos[3].photo}
                alt={photos[3].name}
                title={photos[3].name}
                onClick={e => {
                  e.stopPropagation();
                  onPhotoClick(photos[3].id);
                }}
              />
            </div>
            <div style={{ gridColumn: 5, gridRow: 2 }}>
              <MiniPhoto
                key={photos[4].id}
                src={photos[4].photo}
                alt={photos[4].name}
                title={photos[4].name}
                onClick={e => {
                  e.stopPropagation();
                  onPhotoClick(photos[4].id);
                }}
              />
            </div>
            {/* Bottom row: offset by 1 column (columns 2 and 4) */}
            <div style={{ gridColumn: 2, gridRow: 3 }}>
              <MiniPhoto
                key={photos[5].id}
                src={photos[5].photo}
                alt={photos[5].name}
                title={photos[5].name}
                onClick={e => {
                  e.stopPropagation();
                  onPhotoClick(photos[5].id);
                }}
              />
            </div>
            <div style={{ gridColumn: 4, gridRow: 3 }}>
              <MiniPhoto
                key={photos[6].id}
                src={photos[6].photo}
                alt={photos[6].name}
                title={photos[6].name}
                onClick={e => {
                  e.stopPropagation();
                  onPhotoClick(photos[6].id);
                }}
              />
            </div>
          </MiniConsultantsGrid>
        }
      />
    </CardContainer>
  );
};

const HomeCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.5rem 2.5rem;
  margin: 3.5rem auto 0 auto;
  width: 100%;
  max-width: 1400px;
  justify-items: center;
  align-items: stretch;
  min-height: 0;
`;

const Home: React.FC = () => {
  const navigate = useNavigate();
  const miniPhotoOrder = [0,1,2,3,4,5,6];
  return (
    <HomeWrapper>
      <IntroSection>
        <IntroText>
          "SCxCMC is your trusted partner for CMC strategy, supply chain, and pharmaceutical consulting. Our team brings decades of experience and a passion for delivering results."
        </IntroText>
      </IntroSection>
      <HomeCardGrid>
        <FlipCard
          front="Why SCxMC?"
          back={
            <DescriptionList>
              {whySCXMC.map((item, idx) => (
                <DescriptionItem key={idx}>{item}</DescriptionItem>
              ))}
            </DescriptionList>
          }
        />
        <FlipCard
          front={<span>We are <em>simplified</em> scientific consulting</span>}
          back={
            <DescriptionGrid>
              <HalfList>
                {simplifiedConsulting.slice(0, 4).map((item, idx) => (
                  <DescriptionItem key={idx}>{item}</DescriptionItem>
                ))}
              </HalfList>
              <HalfList>
                {simplifiedConsulting.slice(4).map((item, idx) => (
                  <DescriptionItem key={idx}>{item}</DescriptionItem>
                ))}
              </HalfList>
            </DescriptionGrid>
          }
        />
        <FlipCardWithPhotos
          front="Meet Our Experts"
          photos={miniPhotoOrder.map(idx => consultants[idx])}
          onPhotoClick={id => navigate(`/consultants/${id}`)}
          onCardClick={() => {
            navigate('/consultants');
            window.scrollTo({ top: 0, behavior: 'auto' });
          }}
        />
        <CTACardContact
          onClick={() => {
            navigate('/contact');
            window.scrollTo({ top: 0, behavior: 'auto' });
          }}
        >
          Connect With Us
        </CTACardContact>
      </HomeCardGrid>
    </HomeWrapper>
  );
};

export default Home;
