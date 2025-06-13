import React from 'react';
import { FlipCard } from '../../components/flipcard';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { consultants } from '../consultants/consultants';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 3rem;
  width: 100%;
  position: relative;
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

const CTACardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 3.5rem;
`;

const MiniConsultantsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 90px);
  grid-template-rows: repeat(3, 90px);
  gap: 1.3rem;
  justify-content: center;
  margin-top: 1.5rem;
`;

const MiniPhoto = styled.img`
  width: 90px;
  height: 90px;
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
  // Arrange photos in 3-1-3 grid
  const gridPhotos = [
    photos[0], photos[1], photos[2],
    null,     photos[3], null,
    photos[4], photos[5], photos[6],
  ];
  return (
    <div
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
            {gridPhotos.map((c, i) =>
              c ? (
                <MiniPhoto
                  key={c.id}
                  src={c.photo}
                  alt={c.name}
                  title={c.name}
                  onClick={e => {
                    e.stopPropagation();
                    onPhotoClick(c.id);
                  }}
                />
              ) : <div key={i} />
            )}
          </MiniConsultantsGrid>
        }
      />
    </div>
  );
};

const CTACardContact = styled.div`
  perspective: 1000px;
  width: 650px;
  height: 420px;
  margin: 3rem;
  display: inline-block;
  background: #2B4159;
  border-radius: 16px;
  box-shadow: 0 4px 32px rgba(61, 79, 92, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  font-weight: 800;
  color: #fff;
  text-align: center;
  cursor: pointer;
  transition: box-shadow 0.2s, background 0.2s, transform 0.2s;
  &:hover {
    box-shadow: 0 8px 32px rgba(61, 79, 92, 0.18);
    background: #1a2a3a;
    color: #fff;
    transform: translateY(-4px) scale(1.04);
  }
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
      <CardsRow>
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
      </CardsRow>
      <CTACardGrid>
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
      </CTACardGrid>
    </HomeWrapper>
  );
};

export default Home;
