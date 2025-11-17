import {SectionTitle} from "../../../components/SectionTitle.tsx";
import styled from "styled-components";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";


export const Slogan = () => {
  return (
    <StyledSlogan>
      <Container>
        <FlexWrapper direction={"column"} align={"center"}>
          <SectionTitle>I am available for Freelance</SectionTitle>
          <Button>Hire me</Button>
        </FlexWrapper>
      </Container>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
    min-height: 20vh;
    background-color: pink;
`
