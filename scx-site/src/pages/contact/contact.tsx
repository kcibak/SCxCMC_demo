import React, { useState } from 'react';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';

const PageHeading = styled.h1`
  font-size: 2.8rem;
  color: #2b4159;
  font-weight: 800;
  text-align: center;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
`;

const Subheading = styled.h2`
  font-size: 1.35rem;
  color: #3d4f5c;
  font-weight: 500;
  text-align: center;
  margin: 0 0 2.2rem 0;
`;

const HeadingDivider = styled.hr`
  width: 80px;
  border: none;
  border-top: 4px solid #00a693;
  margin: 0 auto 2.5rem auto;
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: center;
  animation: grow-divider 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  @keyframes grow-divider {
    to {
      transform: scaleX(1);
    }
  }
`;

const FormSection = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(61, 79, 92, 0.1);
  padding: 2.5rem;
  max-width: 700px;
  width: 100%;
  margin-bottom: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  box-sizing: border-box;
`;

const Label = styled.label`
  font-size: 1.13rem;
  color: #2b4159;
  font-weight: 600;
  margin-bottom: 0.7rem;
  display: block;
`;

const Required = styled.span`
  color: #d32f2f;
  margin-left: 0.2em;
  font-size: 1.1em;
`;

const Input = styled.input`
  padding: 1.1rem 1.5rem;
  border: 1.5px solid #cfd8dc;
  border-radius: 8px;
  font-size: 1.13rem;
  background: #f8f9fa;
  color: #2b4159;
  outline: none;
  transition: border 0.2s;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    border-color: #00a693;
  }
`;

const TextArea = styled.textarea`
  padding: 1.1rem 1.5rem;
  border: 1.5px solid #cfd8dc;
  border-radius: 8px;
  font-size: 1.13rem;
  background: #f8f9fa;
  color: #2b4159;
  outline: none;
  min-height: 240px;
  resize: none;
  width: 100%;
  box-sizing: border-box;
  transition: border 0.2s;
  &:focus {
    border-color: #00a693;
  }
`;

const SendButton = styled.button`
  background: #00a693;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 1.1rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 0.7rem;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 2px 8px rgba(61, 79, 92, 0.1);
  width: 100%;
  &:hover {
    background: #00776b;
  }
`;

const LinkedInCorner = styled.a`
  position: absolute;
  top: -1.2rem;
  right: 2.5rem;
  background: #0077b5;
  color: #fff;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  transition: background 0.2s;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(61, 79, 92, 0.1);
  z-index: 100;
  &:hover {
    background: #005983;
  }
`;

const ContactPageWrapper = styled.div`
  position: relative;
`;

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  return (
    <ContactPageWrapper>
      <LinkedInCorner
        href="https://www.linkedin.com/company/scxcmc/"
        target="_blank"
        rel="noopener noreferrer"
        title="SCxCMC LinkedIn"
      >
        <FaLinkedin />
      </LinkedInCorner>
      <PageHeading>Connect With Us</PageHeading>
      <HeadingDivider />
      <Subheading>We'll be in touch within one business day</Subheading>
      <FormSection>
        <FormWrapper>
          <div>
            <Label htmlFor="name">Name<Required>*</Required></Label>
            <Input
              id="name"
              type="text"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            />
          </div>
          <div>
            <Label htmlFor="email">Email<Required>*</Required></Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            />
          </div>
          <div>
            <Label htmlFor="message">Message<Required>*</Required></Label>
            <TextArea
              id="message"
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            />
          </div>
          <SendButton type="button">Send</SendButton>
        </FormWrapper>
      </FormSection>
    </ContactPageWrapper>
  );
};

export default Contact;
