import styled from "styled-components";
import photo from "../../../assets/images/VladimirKim.JPG";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {Button} from "../../../components/Button.tsx";
import {scrollToSection} from "../../../utils/scroll.ts";

export const Main = () => {
  return (
    <StyledMain id="home">
      <Container>
        <ContentWrapper align="center" justify="space-between" gap="40px">
          <TextBlock>
            <Greeting>Hi 👋,</Greeting>
            <Name>
              My name is <NameHighlight>Vladimir Kim</NameHighlight>
            </Name>
            <MainTitle>A Frontend Developer</MainTitle>
            <Description>
              I create beautiful and functional web experiences using modern technologies. 
              Passionate about clean code, user experience, and bringing designs to life.
            </Description>
            <ButtonWrapper>
              <Button size="large" onClick={() => scrollToSection('contacts')}>
                Get In Touch
              </Button>
              <Button variant="outline" size="large" onClick={() => scrollToSection('projects')}>
                View My Work
              </Button>
            </ButtonWrapper>
          </TextBlock>
          <PhotoWrapper>
            <Photo src={photo} alt="Vladimir Kim"/>
          </PhotoWrapper>
        </ContentWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 100px;
    
    @media ${theme.media.tablet} {
        padding-top: 120px;
    }
`

const ContentWrapper = styled(FlexWrapper)`
    @media ${theme.media.tablet} {
        flex-direction: column-reverse;
        text-align: center;
    }
`

const TextBlock = styled.div`
    flex: 1;
    max-width: 600px;
    
    @media ${theme.media.tablet} {
        max-width: 100%;
    }
`

const Greeting = styled.p`
    font-size: 24px;
    color: ${theme.colors.accent};
    margin-bottom: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: 'Josefin Sans', 'sans-serif';
    
    @media ${theme.media.mobile} {
        font-size: 20px;
    }
`

const Name = styled.h1`
    font-family: 'Josefin Sans', 'sans-serif';
    font-weight: 700;
    font-size: clamp(36px, 6vw, 64px);
    letter-spacing: 0.02em;
    margin: 10px 0 20px;
    line-height: 1.2;
    color: ${theme.colors.font};
`

const NameHighlight = styled.span`
    color: ${theme.colors.accent};
`

const MainTitle = styled.h2`
    font-weight: 500;
    font-size: clamp(20px, 3vw, 32px);
    color: ${theme.colors.fontSecondary};
    margin-bottom: 24px;
    font-family: 'Poppins', sans-serif;
`

const Description = styled.p`
    font-size: clamp(16px, 2vw, 18px);
    line-height: 1.8;
    color: ${theme.colors.fontSecondary};
    margin-bottom: 40px;
    max-width: 550px;
    
    @media ${theme.media.tablet} {
        max-width: 100%;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    
    @media ${theme.media.mobile} {
        flex-direction: column;
        align-items: stretch;
        
        button {
            width: 100%;
        }
    }
`

const PhotoWrapper = styled.div`
    position: relative;
    
    @media ${theme.media.tablet} {
        margin-bottom: 40px;
    }
`

const Photo = styled.img`
    width: 350px;
    height: 450px;
    object-fit: cover;
    border-radius: 4px;
    
    @media ${theme.media.tablet} {
        width: 280px;
        height: 360px;
    }
    
    @media ${theme.media.mobile} {
        width: 240px;
        height: 310px;
    }
`