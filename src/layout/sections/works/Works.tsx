import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {WorkCard} from "./workCard/WorkCard.tsx";
import socialImg from "./../../../assets/images/img1.svg"
import timerImg from "./../../../assets/images/img2.svg"
import {Container} from "../../../components/Container.tsx";

const worksItems = ["All", "Landing Page", "React", "Spa"]

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>

        <TabMenu menuItems={worksItems}></TabMenu>

        <FlexWrapper justify={"space-between"} align={"flex-start"}>
          <WorkCard title={"Social Network"} src={socialImg}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
          <WorkCard title={"Timer"} src={timerImg}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`

`