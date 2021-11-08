import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I am <br/>
        Victor Nadu
      </SectionTitle>
      <SectionText>
        Web developer focused on front-end solutions.
      </SectionText>
      <Button onClick={() => window.location = "mailto:victorgnadu@gmail.com"}>Contact me!</Button>
    </LeftSection>
  </Section>
);

export default Hero;