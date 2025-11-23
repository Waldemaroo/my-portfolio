import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./Skill.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";

export const Skills = () => {
  return (
    <StyledSkills id="tech-stack">
      <Container>
        <SectionTitle>Tech Stack</SectionTitle>
        <SkillsGrid>
          <Skill 
            iconId="code" 
            title="HTML5"
            description="Proficient in writing semantic, accessible HTML5 markup. Experienced in creating well-structured documents that enhance SEO and user experience."
          />
          <Skill 
            iconId="css" 
            title="CSS3"
            description="Expert in modern CSS3 features including Flexbox, Grid, animations, and responsive design. Skilled at creating visually appealing and performant stylesheets."
          />
          <Skill 
            iconId="react" 
            title="React"
            description="Strong expertise in React development, including hooks, context API, and component composition. Experienced in building scalable and maintainable React applications."
          />
          <Skill 
            iconId="styledComponents" 
            title="Styled Components"
            description="Proficient in using styled-components for CSS-in-JS styling. Skilled at creating reusable, themeable components with dynamic styling capabilities."
          />
          <Skill 
            iconId="typeScript" 
            title="TypeScript"
            description="Experienced in TypeScript for building type-safe applications. Proficient in leveraging TypeScript's type system to improve code quality and developer experience."
          />
          <Skill 
            iconId="figma" 
            title="Figma"
            description="Skilled in using Figma for UI/UX design, prototyping, and collaboration. Experienced in translating design mockups into pixel-perfect implementations."
          />
        </SkillsGrid>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
    position: relative;
`

const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    position: relative;
    z-index: 1;
    
    @media ${theme.media.tablet} {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 24px;
    }
    
    @media ${theme.media.mobile} {
        grid-template-columns: 1fr;
    }
`