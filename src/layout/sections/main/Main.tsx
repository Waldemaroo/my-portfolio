import styled from "styled-components";
import photo from "../../../assets/images/VladimirKim.JPG"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"}>
          <div>
            <SmallText>Hi there</SmallText>
            <Name>I am <span>Vladimir Kim</span></Name>
            <MainTitle>A Web Developer</MainTitle>
          </div>
          <PhotoWrapper>
            <Photo src={photo} alt="My photo"/>
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: lightgray;
    display: flex;
`

const Photo = styled.img`
    height: 600px;
    width: 400px;
    object-fit: cover;
`

const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;
`

const Name = styled.h1`
    font-family: 'Josefin Sans', 'sans-serif';
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;

        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
`

const SmallText = styled.h2`
    font-weight: 400;
    font-size: 14px;
`

const PhotoWrapper = styled.div `
    position: relative;
    z-index: 0;
    
    &::before {
        content: "";
        width: 360px;
        height: 650px;
        border: 5px solid ${theme.colors.accent};
        position: absolute;
        top: -24px;
        left: 75px;
        z-index: -1;
    }
`