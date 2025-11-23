import {SectionTitle} from "../../../components/SectionTitle.tsx";
import styled from "styled-components";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {scrollToSection} from "../../../utils/scroll.ts";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <Container>
        <ContentWrapper direction="column" align="center" gap="40px">
          <SectionTitle>I am available for Freelance</SectionTitle>
          <Description>
            Looking for a frontend developer to bring your ideas to life? 
            Let's work together to create something amazing.
          </Description>
          <Button size="large" onClick={() => scrollToSection('contacts')}>
            Hire Me
          </Button>
        </ContentWrapper>
      </Container>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
    min-height: 40vh;
    display: flex;
    align-items: center;
    position: relative;
`

const ContentWrapper = styled(FlexWrapper)`
    position: relative;
    z-index: 1;
`

const Description = styled.p`
    max-width: 600px;
    text-align: center;
    font-size: 18px;
    color: ${theme.colors.fontSecondary};
    margin: 0;
    
    @media ${theme.media.tablet} {
        font-size: 16px;
    }
`
