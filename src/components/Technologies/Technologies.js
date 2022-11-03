import React from 'react';
import { DiCss3Full, DiFirebase, DiHtml5, DiJavascript1, DiReact, DiGit, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, SkillsList, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. 
      Here are some of them...
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          {/* <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph> */}
          <SkillsList >
            <picture>
              <DiHtml5 size="5rem" />
            </picture>
            <picture>
              <DiCss3Full size="5rem" />
            </picture>
            <picture>
              <DiJavascript1 size="5rem" />
            </picture>
            <picture>
              <DiReact size="5rem" />
            </picture>
            <picture>
              <DiGit size="5rem" />
            </picture>
          </SkillsList>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
