import {SectionTitle} from "../../../components/SectionTitle.tsx";
import styled from "styled-components";
import {Button} from "../../../components/Button.tsx";


export const Slogan = () => {
  return (
    <StyledSlogan>
      <SectionTitle>I am available</SectionTitle>
      <Button>Hire me</Button>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
    min-height: 20vh;
    background-color: pink;
`
