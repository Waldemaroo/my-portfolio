import styled from "styled-components";
import photo from "../../../assets/images/VladimirKim.JPG"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-around"} >
        <div>
          <span>Hi there</span>
          <Name>I am Vladimir Kim</Name>
          <MainTitle>A Web Developer</MainTitle>
        </div>

        <Photo src={photo} alt="My photo"/>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: lightgray;
`

const Photo = styled.img`
    height: 600px;
    width: 400px;
    object-fit: cover;
`

const MainTitle = styled.h1`

`

const Name = styled.h1`

`