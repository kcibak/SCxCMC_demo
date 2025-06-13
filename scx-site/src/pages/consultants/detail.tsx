import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';
import jsPDF from 'jspdf';

// Import the consultants array from the main consultants page
import { consultants } from './consultants';

const PageContent = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f8f9fa; /* match the rest of the page background */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 1600px;
  margin-top: 3rem;
  gap: 3.5rem;
  padding-bottom: 3.5rem;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 340px;
`;

const Photo = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
`;

const Name = styled.h2`
  font-size: 2.2rem;
  color: #2b4159;
  margin-bottom: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  color: #00a693;
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  text-align: center;
`;

const Bio = styled.div`
  font-size: 1.5rem;
  color: #3d4f5c;
  max-width: 1300px;
  min-width: 400px;
  flex: 1 1 0;
  text-align: left;
  white-space: pre-line;
  background: #fff;
  padding: 2.2rem 2.8rem;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(61, 79, 92, 0.08);

  /* Bullet alignment for wrapped lines */
  ul,
  ol {
    margin: 0 0 0 1.5em;
    padding: 0;
  }
  li {
    margin-bottom: 1em;
    text-indent: -1.5em;
    padding-left: 1.5em;
    word-break: break-word;
  }
`;

const ResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2.5rem;
  width: 100%;
`;

const ResumeImage = styled.img`
  max-width: 600px;
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(61, 79, 92, 0.10);
  margin-bottom: 2rem;
`;

const BioSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0;
`;

const LinkedInButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.1rem;
  background: #0077b5;
  color: #fff;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 2rem;
  transition: background 0.2s;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(61, 79, 92, 0.10);
  &:hover {
    background: #005983;
  }
`;

const ResumeOverlay = styled.div`
  position: fixed;
  top: 100px; /* header height when scrolled, adjust if needed */
  left: 0;
  width: 100vw;
  height: calc(100vh - 100px);
  background: rgba(43, 65, 89, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1300;
`;

const ResumePreview = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 16px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.25);
  background: #fff;
`;

const ZoomControls = styled.div`
  position: fixed;
  bottom: 2.5rem;
  left: 2.5rem;
  display: flex;
  gap: 0.7rem;
  z-index: 1100;
  align-items: center;
`;

const ZoomButton = styled.button`
  background: #2B4159;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 1.7rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  &:hover {
    background: #00A693;
  }
`;

const DownloadButton = styled.button`
  background: #00A693;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 2px 8px rgba(61, 79, 92, 0.10);
  display: flex;
  align-items: center;
  height: 44px;
  &:hover {
    background: #00776b;
  }
`;

const ConsultantDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const consultant = consultants.find(c => c.id === id);
  const [showResume, setShowResume] = useState(false);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!consultant) return <Wrapper>Consultant not found.</Wrapper>;

  // Map consultant id to resume file name
  const resumeMap: Record<string, string> = {
    raysison: '/consultants/rayfile.png',
    kevinbittorf: '/consultants/kevinfile.png',
    frankgibson: '/consultants/frankfile.png',
    emmatrivella: '/consultants/emmafile.png',
    nicholascardoso: '/consultants/nicholasfile.png',
    bobhaldane: '/consultants/bobfile.png',
    elainestone: '/consultants/elainefile.png',
  };
  const resumeSrc = resumeMap[consultant.id];

  const handleDownload = async () => {
    if (!resumeSrc) return;
    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.src = resumeSrc;
    img.onload = () => {
      const pdf = new jsPDF({ orientation: img.width > img.height ? 'l' : 'p', unit: 'px', format: [img.width, img.height] });
      pdf.addImage(img, 'PNG', 0, 0, img.width, img.height);
      pdf.save(`${consultant.name.replace(/\s+/g, '_')}_Resume.pdf`);
    };
  };

  return (
    <PageContent>
      <Wrapper>
        <Left>
          <Name>{consultant.name}</Name>
          <Photo src={consultant.photo} alt={consultant.name} />
          <Title>{consultant.title}</Title>
          {consultant.linkedin && (
            <LinkedInButton
              href={consultant.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title={`View ${consultant.name} on LinkedIn`}
            >
              <FaLinkedin />
            </LinkedInButton>
          )}
        </Left>
        <BioSection>
          <Bio>{consultant.bio}</Bio>
          {resumeSrc && (
            <ResumeWrapper>
              <ResumeImage
                src={resumeSrc}
                alt={`${consultant.name} Resume`}
                onClick={() => setShowResume(true)}
                style={{ cursor: 'pointer' }}
                title="Click to enlarge"
              />
            </ResumeWrapper>
          )}
        </BioSection>
      </Wrapper>
      {showResume && resumeSrc && (
        <ResumeOverlay onClick={() => setShowResume(false)}>
          <ZoomControls onClick={e => e.stopPropagation()}>
            <ZoomButton onClick={() => setZoom(z => Math.max(0.5, +(z - 0.2).toFixed(2)))} title="Zoom Out">-</ZoomButton>
            <ZoomButton onClick={() => setZoom(1)} title="Reset Zoom">⟳</ZoomButton>
            <ZoomButton onClick={() => setZoom(z => Math.min(8, +(z + 0.2).toFixed(2)))} title="Zoom In">+</ZoomButton>
            <DownloadButton onClick={handleDownload} title="Download as PDF">Download PDF</DownloadButton>
          </ZoomControls>
          <div onClick={e => e.stopPropagation()} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ResumePreview
              src={resumeSrc}
              alt={`${consultant.name} Resume Large`}
              style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s' }}
            />
          </div>
        </ResumeOverlay>
      )}
    </PageContent>
  );
};

export default ConsultantDetail;
