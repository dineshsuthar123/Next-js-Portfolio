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
          My Name is Dinesh H Suthar
        </SectionTitle>
        <SectionText>
          I am a aspiring java & blockchain developer who is enthusiastic and passionate about modern Technologies and who really enjoys designing and building awesome websites.
        </SectionText>
        <Button onClick={() => window.location = 'https://drive.google.com/file/d/1zBdoHZwXXBWY2qbekbIYY-q9bQtTfoIc/view?usp=drivesdk'}>Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;