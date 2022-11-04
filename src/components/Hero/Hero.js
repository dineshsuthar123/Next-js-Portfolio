import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello <br />
          My Name is Rohit
        </SectionTitle>
        <SectionText>
          I am a frontend developer who is enthusiastic and passionate about modern Technologies and who really enjoys designing and building awesome websites.
        </SectionText>
        <Button onClick={() => window.location = 'https://drive.google.com/file/d/1fKrBRzMGAax6LXTmoqMtCuVu9VzdJSHF/view?usp=share_link'}>Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;