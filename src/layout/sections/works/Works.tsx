import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Menu} from "../../../components/menu/Menu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {WorkCard} from "./workCard/WorkCard.tsx";
import socialImg from "./../../../assets/images/img1.svg"
import timerImg from "./../../../assets/images/img2.svg"

const worksItems = ["All","Landing Page","React","Spa"]

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My Works</SectionTitle>

      <Menu menuItems={worksItems}></Menu>

      <FlexWrapper justify={"space-around"}>
        <WorkCard title={"Social Network"} src={socialImg} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
        <WorkCard title={"Timer"} src={timerImg} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: coral;
`