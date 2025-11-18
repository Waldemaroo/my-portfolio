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
                    text={"A modern social networking platform built with React and TypeScript. Features include user authentication, real-time messaging, profile customization, and a responsive design that works seamlessly across all devices."}/>
          <WorkCard title={"Timer"} src={timerImg}
                    text={"An intuitive productivity timer application designed to help users manage their time effectively. Built with React and styled-components, featuring customizable intervals, visual progress indicators, and sound notifications."}/>
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`

`